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

export default function ImageFullscreenZoom({ imageSrc, alt = "Imagen" }) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const containerRef = useRef(null);

  // Cerrar con tecla ESC
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setZoom(false);
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

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
    setZoom((prev) => !prev);
  };

  return (
    <>
      {/* Botón activador */}
      <button
        className="expand-image__button expand-image__button--expand"
        onClick={() => setOpen(true)}
        style={{
          padding: "8px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        aria-label="Ver imagen en pantalla completa"
      >
        <i className="fa-solid fa-expand" />
      </button>

      {open && (
        <div style={styles.overlay}>
          <button
            className="expand-image__button expand-image__button--close"
            onClick={() => setOpen(false)}
            style={styles.closeButton}
            aria-label="Cerrar"
          >
            <i className="fa-solid fa-xmark" />
          </button>

          <div
            ref={containerRef}
            style={{
              ...styles.imageContainer,
              transform: zoom ? "scale(2)" : "scale(1)",
              cursor: zoom ? "zoom-out" : "zoom-in",
            }}
            onClick={handleClickZoom}
            onMouseMove={(e) => {
              if (zoom) updateTransformOrigin(e);
            }}
          >
            <img src={imageSrc} alt={alt} style={styles.image} />
          </div>
        </div>
      )}
    </>
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
    zIndex: 9999,
  },
  imageContainer: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "hidden",
    transition: "transform 0.2s ease",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    userSelect: "none",
    pointerEvents: "none",
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "24px",
    background: "rgba(0,0,0,0.6)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
};
