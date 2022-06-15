/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const bodyElem = document.querySelector('body');

    sidebarToggle.addEventListener('click', function(event) {
      bodyElem.classList.toggle('sidebar-open');
      bodyElem.classList.toggle('sidebar-collapse');
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    let sidebar = document.querySelector('.main-sidebar');

    sidebar.addEventListener('click', function(event) {
      let target = event.target;
      let modal;

      if (target.closest('.menu-item_login')) {
        modal = App.getModal('login');
        modal.open()
      } else if (target.closest('.menu-item_register')) {
        modal = App.getModal('register');
        modal.open()
      } else if (target.closest('.menu-item_logout')) {
        User.logout(function(error, response) {
          if (response.success = true) {
            App.setState('init');
          }
        })
      }
    });
  }
}