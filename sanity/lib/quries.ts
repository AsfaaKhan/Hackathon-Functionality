import { groq } from "next-sanity";


export const allProducts = groq`*[_type == "product"]`
export const relatedProducts = groq`*[_type == "product"][10..18]`
export const sixProducts = groq`*[_type == "product"][0..5]`



