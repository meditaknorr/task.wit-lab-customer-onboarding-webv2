/*
* Import pattern for country flag icons
* Import [languageCode] from '..Assets/Images/icons/ic_[languageCode]_lang.svg
 */
import en from '../Assets/Images/icons/ic_en_lang.svg';
import pt from '../Assets/Images/icons/ic_pt_lang.svg';
import it from '../Assets/Images/icons/ic_it_lang.svg';

export const translations = [
  {
    id: 1,
    code: 'en',
    name: 'english',
    flag: en,
    translatedAvailableLanguages: [
      {
        id: 11,
        code: 'pt',
        name: 'portuguese',
      },
      {
        id: 12,
        code: 'it',
        name: 'italian',
      },
      {
        id: 13,
        code: 'en',
        name: 'english',
      },
    ],
    translations:
      {
        header: {
          phoneNumber: 'phone number',
        },
        onboarding: {
          createYour: 'Create your',
          witAccount: 'WIT Account',
          toOpen: 'To open your account, you need to:',
          validatePhone: 'Validate your phone number',
          scanDocument: 'Scan your voter card',
          takeSelfie: 'Take a selfie',
          buttonStart: 'Let\'s start',
          alreadyRegstered: 'Already Registered?',
          seeStatus: 'See status',
          enterPhone: 'Enter your phone number',
          code: 'Code',
          continue: 'Continue',
          validNumber: 'Please insert a valid mobile number.',
          mobilePhone: 'Mobile Phone Number',
          forAccountSettup: 'We will need you phone number for account setup and for security purposes.',
        },
      },
  },
  {
    id: 2,
    code: 'pt',
    flag: pt,
    name: 'portuguese',
    translatedAvailableLanguages: [
      {
        id: 21,
        code: 'pt',
        name: 'português',
      },
      {
        id: 22,
        code: 'en',
        name: 'inglês',
      },
      {
        id: 23,
        code: 'it',
        name: 'italiano',
      },
    ],
    translations:
      {
        header: {
          phoneNumber: 'número de Telefone',
        },
        onboarding: {
          createYour: 'Crie a sua',
          witAccount: 'Conta WIT',
          toOpen: 'Para poder criar a sua conta, você precisa:',
          validatePhone: 'Validar o seu número de telefone.',
          scanDocument: 'Digitalizar o seu cartão de eleitor.',
          takeSelfie: 'Tire ou carregar uma foto sua, selfie.',
          buttonStart: 'Criar uma conta',
          alreadyRegstered: 'já se registrou?',
          seeStatus: 'Verifique o estado',
          enterPhone: 'Introduza o seu número de telemóvel',
          code: 'Código',
          continue: 'Prosseguir',
          validNumber: 'Insira um número válido.',
          mobilePhone: 'Número de telemóvel',
          forAccountSettup: 'Precisamos do seu número de telemóvel (celular) para configurar a conta e para fins de segurança.',
        },
      },
  },
  {
    id: 3,
    code: 'it',
    name: 'Italian',
    flag: it,
    translatedAvailableLanguages: [
      {
        id: 31,
        code: 'en',
        name: 'inglese',
      },
      {
        id: 32,
        code: 'it',
        name: 'italiano',

      },
      {
        id: 33,
        code: 'pt',
        name: 'portoghese',
      },
    ],
    translations:
      {
        header: {
          phoneNumber: 'numero di telefono',
        },
        onboarding: {
          createYour: 'Crea il tuo',
          witAccount: 'Conto WIT',
          toOpen: 'Per aprire il tuo account, devi:',
          validatePhone: 'Convalida il tuo numero di telefono',
          scanDocument: 'Scansiona la tua tessera elettorale',
          takeSelfie: 'Fai un selfie',
          buttonStart: 'Creare un account',
          alreadyRegstered: 'Già Registrato?',
          seeStatus: 'Vedi stato',
          enterPhone: 'Inserisci il tuo numero di telefono',
          code: 'Codice',
          continue: 'Proseguire',
          validNumber: 'Inserisci un numero di cellulare valido.',
          mobilePhone: 'Numero di cellulare',
          forAccountSettup: "Abbiamo bisogno del tuo numero di telefono per la configurazione dell'account e per motivi di sicurezza.",
        },
      },
  },
];
