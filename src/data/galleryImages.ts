import Gallery1 from "../assets/Gallery1.jpeg";
import Gallery2 from "../assets/Gallery2.jpeg";
import Gallery3 from "../assets/Gallery3.jpeg";
import Gallery4 from "../assets/Gallery4.jpeg";
import Gallery5 from "../assets/Gallery5.jpeg";
import Gallery6 from "../assets/Gallery6.jpeg";
import Gallery7 from "../assets/Gallery7.jpeg";
import Gallery9 from "../assets/Gallery9.jpg";
import Gallery11 from "../assets/Gallery11.jpg";
import Gallery12 from "../assets/Gallery12.jpg";
import Gallery13 from "../assets/Gallery13.jpg";
import Gallery14 from "../assets/Gallery14.jpg";
import Gallery15 from "../assets/Gallery15.jpg";
import Gallery16 from "../assets/Gallery16.jpg";
import Gallery17 from "../assets/Gallery17.jpg";
import Gallery18 from "../assets/Gallery18.jpg";
import Gallery19 from "../assets/Gallery19.jpg";
import Gallery20 from "../assets/Gallery20.jpg";
import Gallery21 from "../assets/Gallery21.jpg";
import Gallery22 from "../assets/Gallery22.jpg";
import Gallery23 from "../assets/Gallery23.jpg";
import NewGallery1 from "../assets/061134d8-2e0e-4add-80a3-d80496b07328.jpg";
import NewGallery2 from "../assets/0f3640ef-036c-4d24-83f5-6903403af5d7.jpg";
import NewGallery3 from "../assets/12654ba5-62dd-403e-b833-7f7fa752959a.jpg";
import NewGallery4 from "../assets/22123818-d17b-4180-a8f3-3a0aa22fec65.jpg";
import NewGallery5 from "../assets/25a4f4d8-793f-495e-aee4-2736483f4bd6.jpg";
import NewGallery6 from "../assets/2e193c1b-b96c-4438-b254-fe99d3cadc5d.jpg";
import NewGallery7 from "../assets/2e4cf40e-c39f-49db-bc2f-2972db32541a.jpg";
import NewGallery8 from "../assets/324cdc69-3a04-408e-8ec3-ffa832a5a4ef.jpg";
import NewGallery9 from "../assets/337c5b9a-2d76-4595-9755-0cb4484ab1ed.jpg";
import NewGallery10 from "../assets/3ce15582-617b-4bf4-bc5c-6f7e39c26aff.jpg";
import NewGallery11 from "../assets/4f4471f8-d5ce-4067-a9be-d52f996a305e.jpg";
import NewGallery12 from "../assets/5034e984-eaa1-415f-89b5-465ce530e3cf.jpg";
import NewGallery13 from "../assets/71c0eb85-7260-4807-9cb3-e05d3f76369f.jpg";
import NewGallery14 from "../assets/7f3c1022-d92c-41c0-8f9c-1b10cb417aa3.jpg";
import NewGallery15 from "../assets/87cdb7b6-f711-4b06-9ee3-9acfd576bf29.jpg";
import NewGallery16 from "../assets/907d1bbc-433e-40e9-9ca6-84018470403d.jpg";
import NewGallery17 from "../assets/91e42c65-9e08-467b-9430-a65e5ff5bf99.jpg";
import NewGallery18 from "../assets/9f378a3d-b0f0-491b-b5ad-cb241f397750.jpg";
import NewGallery19 from "../assets/ab59a275-60d7-4cd6-9b2f-8ec28d338097.jpg";

export const galleryCategories = ["All", "Bridal", "Editorial", "Casual"] as const;

export const galleryImages = [
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery9,
  Gallery11,
  Gallery12,
  Gallery13,
  Gallery14,
  Gallery15,
  Gallery16,
  Gallery17,
  Gallery18,
  Gallery19,
  Gallery20,
  Gallery21,
  Gallery22,
  Gallery23,
  NewGallery1,
  NewGallery2,
  NewGallery3,
  NewGallery4,
  NewGallery5,
  NewGallery6,
  NewGallery7,
  NewGallery8,
  NewGallery9,
  NewGallery10,
  NewGallery11,
  NewGallery12,
  NewGallery13,
  NewGallery14,
  NewGallery15,
  NewGallery16,
  NewGallery17,
  NewGallery18,
  NewGallery19,
];

export const filterGalleryImages = (
  images: string[],
  category: (typeof galleryCategories)[number],
) => {
  if (category === "All") return images;

  return images.filter((_, index) =>
    (category === "Bridal" && index % 3 === 0) ||
    (category === "Editorial" && index % 3 === 1) ||
    (category === "Casual" && index % 3 === 2),
  );
};
