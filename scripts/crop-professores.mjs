import sharp from "sharp";

// Recorte padronizado das fotos dos professores: quadrado focado em
// cabeça + ombros (~10% de respiro acima da cabeça, rosto centralizado),
// para que o corte circular fique uniforme entre os 4 cards.
// Coordenadas (left/top/size) medidas sobre cada foto-fonte.
const dir = "public/professores";
const jobs = [
  { src: "fotonoel.jpg", out: "noel.jpg", left: 329, top: 0, size: 1827 },
  { src: "fotomaicon.jpg", out: "maicon.jpg", left: 204, top: 0, size: 258 },
  { src: "fotobruna.jpeg", out: "bruna.jpg", left: 178, top: 0, size: 563 },
  { src: "fotolucas.jpg", out: "lucas.jpg", left: 355, top: 0, size: 1827 },
];

for (const j of jobs) {
  const meta = await sharp(`${dir}/${j.src}`).metadata();
  const left = Math.max(0, Math.min(j.left, meta.width - 1));
  const top = Math.max(0, Math.min(j.top, meta.height - 1));
  const size = Math.min(j.size, meta.width - left, meta.height - top);
  await sharp(`${dir}/${j.src}`)
    .extract({ left, top, width: size, height: size })
    .resize(512, 512, { fit: "cover" })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(`${dir}/${j.out}`);
  console.log(`${j.out}: ${size}px @(${left},${top}) <- ${meta.width}x${meta.height}`);
}
