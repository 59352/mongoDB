const input = document.querySelector('.input');
const output = document.querySelector('.output');

vocabulary = {
  link: 'You have entered link!',
  email: 'You have entered email!',
  nickName: 'You have entered Nickname',
};

input.addEventListener('keyup', () => {

  output.innerHTML = this.value.replace(
    /\b\w+@\w+\.\w+\b/, (match, value) => vocabulary[link],
  );
}, false);
