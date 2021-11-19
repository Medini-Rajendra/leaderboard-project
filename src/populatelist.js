const populatelist = (list) => {
  const info = document.getElementById('scores');
  info.innerHTML = '';
  list.forEach((element) => {
    const newElement = document.createElement('li');
    newElement.classList = 'item';
    newElement.innerHTML = `${'Name:'}${element}`;
    info.appendChild(newElement);
  });
};

module.exports = { populatelist };