const modules = import.meta.glob('./images/**/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
  import: 'default',
});

export function getProjectImages(projectFolder) {
  const projectImages = Object.entries(modules)
    .filter(([path]) => path.includes(`/images/${projectFolder}/`))
    .map(([path, src]) => ({
      path,
      src,
    }));

  let cover = null;
  const gallery = [];

  projectImages.forEach((image) => {
    const fileName = image.path.split('/').pop();

    // Detect cover.*
    if (/^cover\./i.test(fileName)) {
      cover = image.src;
      return;
    }

    // Detect filenames like:
    // 1.png
    // 1.jpg
    // 1 - Login.png
    // 10 - Checkout page.webp
    const match = fileName.match(/^(\d+)/);

    if (match) {
      gallery.push({
        order: Number(match[1]),
        src: image.src,
      });
    }
  });

  gallery.sort((a, b) => a.order - b.order);

  return {
    cover,
    gallery: gallery.map((img) => img.src),
  };
}