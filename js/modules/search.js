/**
 * Search Module
 * @author Damian Szczypka <damian.szczypka@unic.com>
 * @returns {Object}
 */
const Search = () => {
  const domSelectors = {
    module: '[data-search]',
    input: '[data-search-input]',
  }
  const stateClasses = {}
  const domElements = {}

  /**
   * TODO: Document method properly
   * @returns {undefined}
   */
  const handleSearchAdd = ({ detail }) => {
    domElements.input.value += detail;
    // domElements.input.focus();
  };

  // TODO: Document method properly
  const handleSearchRemove = (event) => {
    const cursorPosition = domElements.input.selectionStart;
    const { value } = domElements.input;

    const part1 = value.substring(0, cursorPosition - 1);
    const part2 = value.substring(cursorPosition, value.length);

    domElements.input.value = part1 + part2;
    // domElements.input.focus();
  };

  /**
   * Add event listeners
   * @returns {undefined}
   */
  const _addUIElementsListeners = () => {
    window.addEventListener('search.add', handleSearchAdd)
    window.addEventListener('search.remove', handleSearchRemove)
  }

  /**
   * Remove event listeners
   * @returns {undefined}
   */
  const _removeUIElementsListeners = () => {
    domElements.input.removeEventListener('search.update', handleSearchUpdate)
  }

  /**
   * Get UI lelements
   * @returns {undefined}
   */
  const _getUIElements = () => {
    domElements.module = document.querySelector(domSelectors.module)
    domElements.input = domElements.module.querySelector(domSelectors.input)
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
  }

  return {
    initialize,
    destroy,
  }
}

export default Search
