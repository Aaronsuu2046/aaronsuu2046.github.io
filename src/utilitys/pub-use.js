export default function getAssetsFile(url) {
   return new URL(`../assets/images/${url}`, import.meta.url).href
}