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

export default function ImageFullscreenZoom({
  images = [],
  initialIndex = 0,
  open,
  onClose,
  alt = "Imagen",
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(false);
  const containerRef = useRef(null);

  // sincronizar índice al abrir
  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
      setZoom(false);
    }
  }, [open, initialIndex]);

  // ESC y flechas
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
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
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const prevImage = () => {
    setZoom(false);
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  return (
    <div style={styles.overlay}>
      {/* Cerrar */}
      <button style={styles.closeButton} onClick={onClose}>
        <i className="fa-solid fa-xmark" />
      </button>

      {/* Flecha izquierda */}
      <button style={{ ...styles.arrow, left: 20 }} onClick={prevImage}>
        ‹
      </button>

      {/* Imagen principal */}
      <div
        ref={containerRef}
        style={{
          ...styles.imageContainer,
          transform: zoom ? "scale(2)" : "scale(1)",
          cursor: zoom ? "zoom-out" : "zoom-in",
        }}
        onClick={handleClickZoom}
        onMouseMove={(e) => zoom && updateTransformOrigin(e)}
      >
        <img
          src={images[currentIndex]}
          alt={alt}
          style={styles.image}
        />
      </div>

      {/* Flecha derecha */}
      <button style={{ ...styles.arrow, right: 20 }} onClick={nextImage}>
        ›
      </button>

      {/* Thumbnails */}
      <div style={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={img}
            src={img}
            onClick={() => {
              setZoom(false);
              setCurrentIndex(index);
            }}
            style={{
              ...styles.thumbnail,
              opacity: index === currentIndex ? 1 : 0.4,
              border:
                index === currentIndex
                  ? "2px solid white"
                  : "2px solid transparent",
            }}
          />
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
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 24,
    cursor: "pointer",
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
    cursor: "pointer",
    transition: "opacity 0.2s, border 0.2s",
  },
};
