/**
 * Class FormGenerator
 *
 * Génèrateur de formulaire
 */
class FormGenerator
{
  
  /**
   * input
   * Génère une balise input.
   *
   * @param name attribut name
   * @param placeholder attribut placeholder
   * @param type attribut type
   * @param id id de la balise input
   * @param required Met l'attribut requirede si nécéssaire.
   * @return char
   */
  input(type = 'text',placeholder = null, name = null, id = null, required = false)
  {
    var inputElt = document.createElement('input');
    if (id){
      inputElt.id = id;
    }
    
    inputElt.setAttribute('type', type);
    if (name){
      inputElt.setAttribute('name', name);
    }
    

    if (placeholder){
      inputElt.setAttribute('placeholder', placeholder);
    }

    if (required){
      inputElt.setAttribute('required', '');
    }
    
    return inputElt;
  }
