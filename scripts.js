const postWrap = document.querySelector('.post-wrap');
let bar = document.createElement('div');

bar.style.height = '4px';
bar.style.width = '0px';
bar.style.backgroundColor = '#7159c1';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '9999';
bar.style.transition = '200ms';

document.body.append(bar);

window.addEventListener('load', () => {
  document.addEventListener('scroll', () => {
    const textHeight = postWrap.offsetHeight;

    const pagePosition = window.pageYOffset;

    const updatedBar = (pagePosition * 100) / textHeight;

    bar.style.width = updatedBar + '%';
  });
});
