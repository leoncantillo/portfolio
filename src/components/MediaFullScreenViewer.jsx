import React, { useState, useRef, useEffect } from "react";

/**
 * ImageFullscreenZoom
 * - Muestra una imagen en pantalla completa
 * - Overlay oscuro
 * - Zoom con efecto lupa AL HACER CLICK (no hover)
 * - Punto de zoom según posición del click
 * - Botón para cerrar
 * - Se activa desde un botón
 */

export default function MediaFullScreenViewer({
  media = [],
  initialIndex = 0,
  open,
  onClose,
  alt = "Imagen",
}) {

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(false);

  const containerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);
  const wasOpenRef = useRef(false);

  const currentMedia = media[currentIndex];

  if (!currentMedia) return null;

  const isImage = currentMedia.type === "image";

  // sincronizar índice al abrir
  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
      setZoom(false);
    }
  }, [open, initialIndex]);

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      previouslyFocusedElementRef.current = document.activeElement;
      const frameId = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

      return () => window.cancelAnimationFrame(frameId);
    }

    if (wasOpenRef.current) {
      previouslyFocusedElementRef.current?.focus();
      wasOpenRef.current = false;
    }

    return undefined;
  }, [open]);

  // ESC y flechas
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();

      if (e.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, currentIndex]);

  if (!open) return null;

  const updateTransformOrigin = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    containerRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleClickZoom = (e) => {
    updateTransformOrigin(e);
    setZoom((z) => !z);
  };

  const nextImage = () => {
    setZoom(false);
    setCurrentIndex((i) => (i + 1) % media.length);
  };

  const prevImage = () => {
    setZoom(false);
    setCurrentIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-gallery-title"
      style={styles.overlay}
    >
      <h2 id="image-gallery-title" style={styles.visuallyHidden}>Galería Multimedia</h2>
      {/* Cerrar */}
      <button ref={closeButtonRef} type="button" aria-label="Cerrar galería" style={styles.closeButton} onClick={onClose}>
        <i className="fa-solid fa-xmark" />
      </button>

      {/* Flecha izquierda */}
      <button type="button" aria-label="Imagen anterior" style={{ ...styles.arrow, left: 20 }} onClick={prevImage}>
        ‹
      </button>

      {/* Contenido principal */}
      <div
        ref={containerRef}
        style={{
            ...styles.imageContainer,
            transform: isImage && zoom ? "scale(2)" : "scale(1)",
            cursor: isImage
                ? (zoom ? "zoom-out" : "zoom-in")
                : "default",
        }}
        onClick={isImage ? handleClickZoom : undefined}
        onMouseMove={isImage && zoom ? updateTransformOrigin : undefined}
      >
        {currentMedia.type === "video" ? (
          <video
            src={currentMedia.src}
            controls
            autoPlay
            style={styles.video}
          />
        ) : (
          <img
            src={currentMedia.src}
            alt={currentMedia.alt}
            style={styles.image}
          />
        )}
      </div>

      {/* Flecha derecha */}
      <button type="button" aria-label="Imagen siguiente" style={{ ...styles.arrow, right: 20 }} onClick={nextImage}>
        ›
      </button>

      {/* Thumbnails */}
      <div style={styles.thumbnails}>
        {media.map((item, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Elemento ${index + 1} de la galería`}
            aria-current={index === currentIndex ? "true" : undefined}
            onClick={() => {
              setZoom(false);
              setCurrentIndex(index);
            }}
            style={{
              ...styles.thumbnailButton,
              opacity: index === currentIndex ? 1 : 0.4,
              border:
                index === currentIndex
                  ? "2px solid white"
                  : "2px solid transparent",
            }}
          >
            {item.type === "video" ? (
                <video
                    src={item.src}
                    muted
                    preload="metadata"
                    style={styles.thumbnail}
                />
            ) : (
                <img
                    src={item.src}
                    alt=""
                    style={styles.thumbnail}
                />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 9999,
  },
  imageContainer: {
    maxWidth: "80vw",
    maxHeight: "80vh",
    overflow: "hidden",
    transition: "transform 0.2s ease",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    pointerEvents: "none",
    userSelect: "none",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    userSelect: "none",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 24,
    cursor: "pointer",
    zIndex: 10,
  },
  arrow: {
    position: "absolute",
    top: "50%",
    fontSize: 48,
    color: "white",
    background: "none",
    border: "none",
    cursor: "pointer",
    transform: "translateY(-50%)",
    zIndex: 10,
  },
  thumbnails: {
    display: "flex",
    gap: 8,
    marginTop: 20,
    maxWidth: "90vw",
    overflowX: "auto",
  },
  thumbnail: {
    width: 60,
    height: 60,
    objectFit: "cover",
    display: "block",
  },
  thumbnailButton: {
    padding: 0,
    cursor: "pointer",
    transition: "opacity 0.2s, border 0.2s",
  },
  visuallyHidden: {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
};
