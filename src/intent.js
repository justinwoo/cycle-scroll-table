function intent(DOM) {
  let actions = {
    userScrolled$: DOM.get('#scroll-table-container', 'scroll')
      .map(e => e.srcElement.scrollTop)
  };
  return actions;
}

export default intent;
