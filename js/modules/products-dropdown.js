/**
 * Cookie-Banner Module
 * @author Damian Szczypka <damian.szczypka@unic.com>
 * @returns {Object}
 */
function name() {
  const domSelectors = {
    module: '[data-products-dropdown]',
    trigger: '[data-products-dropdown-trigger]',
  }
  const stateClasses = {
    isOpen: 'is-open',
  }
  const domElements = {}

  const handleDocumentClick = (event) => {
    const isElementOutside = !event.target.closest(domSelectors.module)

    if (isElementOutside) {
      domElements.module.classList.remove(stateClasses.isOpen)
      document.removeEventListener('click', handleDocumentClick)
    }
  }

  /**
   * Set date in `localStorage` and remove _Cookie-Banner_
   * @returns {undefined}
   */
  const handleTriggerClick = (event) => {
    event.stopPropagation()
    domElements.module.classList.toggle(stateClasses.isOpen)
    document.addEventListener('click', handleDocumentClick)
  };

  /**
   * Add event listeners
   * @returns {undefined}
   */
  const _addUIElementsListeners = () => {
    domElements.trigger.addEventListener('click', handleTriggerClick)
  }

  /**
   * Remove event listeners
   * @returns {undefined}
   */
  const _removeUIElementsListeners = () => {
    domElements.trigger.removeEventListener('click', handleTriggerClick)
  }

  /**
   * Get UI lelements
   * @returns {undefined}
   */
  const _getUIElements = () => {
    domElements.module = document.querySelector(domSelectors.module)
    domElements.trigger = document.querySelector(domSelectors.trigger)
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

export default name
