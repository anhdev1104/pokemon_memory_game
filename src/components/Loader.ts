const Loader = () => {
  const loader = `<div class="load">
  <div class="loader">
      <div class="inner one"></div>
      <div class="inner two"></div>
      <div class="inner three"></div>
  </div>
</div>`;
  return document.body?.insertAdjacentHTML('afterbegin', loader);
};

export const hideLoader = () => {
  const loader = document?.querySelector('.load');
  return loader?.parentElement?.removeChild(loader);
};

export default Loader;
