/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
   let modal;
   let form;

   User.login(data, function(error, response) {
    if (response.success) {
     modal = App.getModal('login');
     form = App.getForm('login');
     
     form.element.reset();

     App.setState('user-logged');
     modal.close();
    }
   })
  }
}