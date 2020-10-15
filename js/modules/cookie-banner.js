import { DAY_IN_MS } from '../core/constants.js'

/**
 * Cookie-Banner Module
 * @author Damian Szczypka <damian.szczypka@unic.com>
 * @returns {Object}
 */
const cookieBanner = () => {
  const domSelectors = {
    module: '[data-cookie-banner]',
    closeButton: '[data-cookie-banner-close]',
  }
  const stateClasses = {
    isOpen: 'is-open',
  }
  const domElements = {}
  const localStorageKeyName = 'ufem-cookie-banner'
  const amountOfDaysToExpire = 5

  /**
   * Show _Cookie-Banner_ Module
   * @returns {undefined}
   */
  const _showModule = () => {
    domElements.module.classList.add(stateClasses.isOpen)
  }

  /**
   * Compare dates to check if passed date is not expired
   * @param {Date} date
   * @returns {Boolean}
   */
  const _isDateExpired = (date) => {
    const diffTime = Math.abs(Date.now() - date)
    const diffDays = Math.ceil(diffTime / DAY_IN_MS)

    return diffDays < amountOfDaysToExpire;
  }

  /**
   * Remove _Cookie-Banner_ Module or display it (if date is not expired)
   * @returns {undefined}
   */
  const _checkLocalStorage = () => {
    const closedDate = new Date(localStorage.getItem(localStorageKeyName))
    const isCloseDateExpired = _isDateExpired(closedDate)

    if (isCloseDateExpired) {
      destroy()
    } else {
      _showModule()
    }
  }

  /**
   * Set date in `localStorage` and remove _Cookie-Banner_
   * @returns {undefined}
   */
  const handleCloseButtonClick = () => {
    // localStorage.setItem(localStorageKeyName, Date.now())
    localStorage.setItem(localStorageKeyName, new Date('10/08/2020')) // TODO: Fix date comaprisons
    domElements.module.remove()
  };

  /**
   * Add event listeners
   * @returns {undefined}
   */
  const _addUIElementsListeners = () => {
    domElements.closeButton.addEventListener('click', handleCloseButtonClick)
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
  }

  /**
   * Initialize _Cookie-Banner_ Module
   * @returns {undefined}
   */
  const initialize = () => {
    _getUIElements()
    _addUIElementsListeners()
    _checkLocalStorage()
  }

  /**
   * Destroy _Cookie-Banner_ Module
   * @returns {undefined}
   */
  const destroy = () => {
    _removeUIElementsListeners()
    domElements.module.remove()
  }

  return {
    initialize,
    destroy,
  }
}

export default cookieBanner
