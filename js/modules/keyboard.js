/**
 * Keyboard Module
 * @author Damian Szczypka <damian.szczypka@unic.com>
 * @returns {Object}
 */
const keyboard = () => {
  const domSelectors = {
    module: '[data-keyboard]',
    closeButton: '[data-keyboard-close]',
    keyboardPanel: '[data-keyboard-panel]',
    searchInput: '[data-keyboard-input]',
  }
  const stateClasses = {
    isOpen: 'is-open',
    isActive: 'is-active',
  }
  const domElements = {}

  // TODO: Document method properly
  const createEvent = (name, data) => {
    const event = new CustomEvent(name, data);

    window.dispatchEvent(event);
  };

  // TODO: Document method properly
  const _addCharacter = (character) => {
    createEvent('search.add', { detail: character });
  };

  // TODO: Document method properly
  const _removeCharacter = () => {
    createEvent('search.remove');
  };

  /**
   * Set date in `localStorage` and remove _Cookie-Banner_
   * @returns {undefined}
   */
  const handleClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      const key = event.target.textContent;

      switch (key) {
        case 'DEL':
          _removeCharacter();
          break;
        case 'CAPS':
          console.log('TODO: Handle constant uppercase');
          break;
        case 'SHIFT':
          console.log('TODO: Handle uppercase/lowercase');
          break;
        case 'CTRL+ALT':
          console.log('TODO: Handle diacritics');
          break;
        default:
          _addCharacter(key)
          break;
      }
    }
  };

  /**
   * Add event listeners
   * @returns {undefined}
   */
  const _addUIElementsListeners = () => {
    domElements.keyboardPanel.addEventListener('click', handleClick)
  }

  /**
   * Remove event listeners
   * @returns {undefined}
   */
  const _removeUIElementsListeners = () => {
    domElements.closeButton.removeEventListener('click', handleCloseButtonClick)
  }

  /**
   * Get UI lelements
   * @returns {undefined}
   */
  const _getUIElements = () => {
    domElements.module = document.querySelector(domSelectors.module)
    domElements.closeButton = domElements.module.querySelector(domSelectors.closeButton)
    domElements.keyboardPanel = domElements.module.querySelector(domSelectors.keyboardPanel)
  }

  /**
   * Initialize _Cookie-Banner_ Module
   * @returns {undefined}
   */
  const initialize = () => {
    _getUIElements()
    _addUIElementsListeners()
  }

  /**
   * Destroy _Cookie-Banner_ Module
   * @returns {undefined}
   */
  const destroy = () => {
    _removeUIElementsListeners()
    // domElements.module.remove()
  }

  return {
    initialize,
    destroy,
  }
}

export default keyboard
