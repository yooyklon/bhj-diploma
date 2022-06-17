/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
   let modal;
   let form;

   User.register(data, function(error, response) {
    if (response.success) {
     modal = App.getModal('register');
     form = App.getForm('register');
     form.element.reset();

     App.setState('user-logged')
     modal.close();
    }
   })
  }
}