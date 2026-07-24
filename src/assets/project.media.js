const modules = import.meta.glob(
  './images/**/*.{png,jpg,jpeg,webp,avif,gif,svg,mp4,webm,mov}',
  {
    eager: true,
    import: 'default',
  }
);

const VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov'];

function getAltFromFilename(filename) {
  return filename
    .replace(/\.[^.]+$/, '')      // Elimina la extensión
    .replace(/^\d+\s*-\s*/, '')   // Elimina "1 - ", "12 - ", etc.
    .trim();
}

export function getProjectMedia(projectFolder) {
  const projectFiles = Object.entries(modules)
    .filter(([path]) => path.includes(`/images/${projectFolder}/`))
    .map(([path, src]) => ({
      path,
      src,
    }));

  let cover = null;
  const gallery = [];

  projectFiles.forEach((file) => {
    const fileName = file.path.split('/').pop();

    // Detect cover.*
    if (/^cover\./i.test(fileName)) {
      cover = file.src;
      return;
    }

    // Detect filenames beginning with a number
    const match = fileName.match(/^(\d+)/);

    if (!match) return;

    const extension = fileName.split('.').pop().toLowerCase();

    gallery.push({
      order: Number(match[1]),
      src: file.src,
      type: VIDEO_EXTENSIONS.includes(extension) ? 'video' : 'image',
      alt: getAltFromFilename(fileName),
      filename: fileName,
    });
  });

  gallery.sort((a, b) => a.order - b.order);

  return {
    cover,
    gallery,
  };
}