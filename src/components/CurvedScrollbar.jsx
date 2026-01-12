import { useEffect, useRef, useState } from "react";
import "../styles/ScrollBar.scss";

const OFFSET = 7;
const MIN_THUMB = 20;

const SEGMENT_DENSITY = 1 / 6;
const MIN_SEGMENTS = 20;
const MAX_SEGMENTS = 200;

export default function CurvedScrollbar({
    as: Component = 'div',
    children,
    className = "",
    contentClasses = "",
}) {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const trackRef = useRef(null);
    const thumbRef = useRef(null);

    const [showScrollbar, setShowScrollbar] = useState(false);

    const stateRef = useRef({
        pathLength: 0,
        thumbLength: 50,
        dragging: false,
        pointerId: null,
    });

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        if (!container || !content) return;

        function check() {
            const needs =
                content.scrollHeight > content.clientHeight + 1;
            setShowScrollbar(needs);
        }

        const ro = new ResizeObserver(check);
        ro.observe(container);
        ro.observe(content);

        check();

        return () => ro.disconnect();
    }, []);


    useEffect(() => {
        if (!showScrollbar) return;

        const container = containerRef.current;
        const content = contentRef.current;
        const trackPath = trackRef.current;
        const thumbPath = thumbRef.current;

        if (!container || !content || !trackPath || !thumbPath) return;

        /* ---------- path ---------- */

        function updatePath() {
            const w = container.clientWidth;
            const h = container.clientHeight;

            if (!trackPath || !thumbPath) return;
            if (w === 0 || h === 0) return;

            const styles = getComputedStyle(container);
            const r = parseFloat(styles.borderTopRightRadius) || 0;
            const trackWidth =
                parseFloat(styles.getPropertyValue("--track-width")) || 0;

            const halfTrack = trackWidth / 2;
            const effectiveRadius = Math.max(r - OFFSET - halfTrack, 0);

            const trackX = w - OFFSET - halfTrack;
            const topY = OFFSET;
            const bottomY = h - OFFSET;
            const cornerX = trackX - effectiveRadius;

            const d = `
        M ${cornerX} ${topY}
        A ${effectiveRadius} ${effectiveRadius} 0 0 1 ${trackX} ${topY + effectiveRadius}
        L ${trackX} ${bottomY - effectiveRadius}
        A ${effectiveRadius} ${effectiveRadius} 0 0 1 ${cornerX} ${bottomY}
      `;

            trackPath.setAttribute("d", d);

            const pathLength = trackPath.getTotalLength();
            const ratio = content.clientHeight / content.scrollHeight;

            stateRef.current.pathLength = pathLength;
            stateRef.current.thumbLength = Math.max(
                MIN_THUMB,
                pathLength * ratio
            );

            updateThumb();
        }

        /* ---------- thumb ---------- */

        function updateThumb() {
            if (!stateRef.current.pathLength) return;
            
            const { pathLength, thumbLength } = stateRef.current;

            const scrollable =
                content.scrollHeight - content.clientHeight || 1;

            const scrollRatio = content.scrollTop / scrollable;
            const startOffset = (pathLength - thumbLength) * scrollRatio;
            const endOffset = startOffset + thumbLength;

            const segments = Math.min(
                MAX_SEGMENTS,
                Math.max(
                    MIN_SEGMENTS,
                    Math.ceil(thumbLength * SEGMENT_DENSITY)
                )
            );

            const points = [];

            for (let i = 0; i <= segments; i++) {
                const t =
                    startOffset +
                    ((endOffset - startOffset) / segments) * i;
                const p = trackPath.getPointAtLength(t);
                points.push(`${p.x} ${p.y}`);
            }

            const d = `M ${points[0]} ${points
                .slice(1)
                .map((pt) => `L ${pt}`)
                .join(" ")}`;

            thumbPath.setAttribute("d", d);
        }

        /* ---------- pointer ---------- */

        function onPointerDown(e) {
            e.preventDefault();
            stateRef.current.dragging = true;
            stateRef.current.pointerId = e.pointerId;
            thumbPath.setPointerCapture(e.pointerId);
        }

        function onPointerMove(e) {
            const state = stateRef.current;
            if (!state.dragging || e.pointerId !== state.pointerId) return;

            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const l = getClosestPathLength(trackPath, x, y);
            const clamped = Math.max(
                0,
                Math.min(
                    state.pathLength - state.thumbLength,
                    l - state.thumbLength / 2
                )
            );

            const ratio = clamped / (state.pathLength - state.thumbLength);
            content.scrollTop =
                ratio * (content.scrollHeight - content.clientHeight);

            updateThumb();
        }

        function onPointerUp(e) {
            const state = stateRef.current;
            if (!state.dragging || e.pointerId !== state.pointerId) return;

            state.dragging = false;
            try {
                thumbPath.releasePointerCapture(state.pointerId);
            } catch { }
            state.pointerId = null;
        }

        /* ---------- observers ---------- */

        const ro = new ResizeObserver(updatePath); // NEW
        ro.observe(container);
        ro.observe(content);

        thumbPath.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
        content.addEventListener("scroll", updateThumb);

        updatePath();

        return () => {
            ro.disconnect();
            thumbPath.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            content.removeEventListener("scroll", updateThumb);
        };
    }, [showScrollbar]);

    return (
        <Component
            ref={containerRef}
            className={`scroll-container ${className}`}
        >
            <div
                ref={contentRef}
                className={`scroll-content ${contentClasses}`}
            >
                {children}
            </div>

            {showScrollbar && (
                <svg className="scrollbar-svg" aria-hidden="true">
                    <path ref={trackRef} className="scroll-track" />
                    <path ref={thumbRef} className="scroll-thumb" />
                </svg>
            )}
        </Component>
    );
}

/* helpers */

function getClosestPathLength(path, x, y, samples = 100) {
    const total = path.getTotalLength();
    let closest = 0;
    let minDist = Infinity;

    for (let i = 0; i <= samples; i++) {
        const l = (total * i) / samples;
        const p = path.getPointAtLength(l);
        const dx = p.x - x;
        const dy = p.y - y;
        const d = dx * dx + dy * dy;

        if (d < minDist) {
            minDist = d;
            closest = l;
        }
    }

    return closest;
}
