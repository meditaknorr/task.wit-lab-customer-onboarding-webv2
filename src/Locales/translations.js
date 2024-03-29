export const translations = [
  {
    id: 1,
    code: 'en',
    name: 'english',
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
      submitAndValidate: {
        scanVoterID: 'Scan ID card',
        validating: 'Just a moment we are validating your identity.',
        photoUnclear: 'The photo is not clear',
        photoUnclearDescription1: 'There was a problem submitting data.',
        photoUnclearDescription2: 'Please try again.',
      },
      validation: {
        validationHeader: 'Document Scan and Selfie',
        validationText: 'On the next screens, you are required to scan your ID card (front side and back) as also, you will have to take a selfie.',
        continue: 'Continue',
      },
      modal: {
        cancel: 'Cancel',
        delete: 'Delete',
        deleteCardPhoto: 'Delete ID card photo',
        deleteFrontPhotoConfirmation: 'Are you sure you want to delete the selected photo of your national ID card?',
        deleteBackPhotoConfirmation: 'Are you sure you want to delete the selected photo of your national ID?',
        deleteSelfiePhoto: 'Delete Selfie photo',
        deleteSelfiePhotoConfirmation: 'Are you sure you want to delete this photo, your selfie photo?',
      },
      header: {
        regStatus: 'Status',
        regConfirmation: 'Confirmation',
        regAdditionalInformation: 'Additional Information',
        regGeneralInformation: 'General Information',
        regVoterCard: 'Voter Card',
        regSelfie: 'Selfie',
        regPhoneNumber: 'Phone Number',
        regScanSelfie: 'Scan and Selfie',
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
        pleaseConfirm: 'Confirm your phone number',
        verificationSentTo: 'We’ve just sent a verification code to',
        codeIncorrect: 'Incorrect code',
        tryAgainCode: 'Please try again to insert another number or code.',
        resendCode: 'Resend code',
      },
      scanVoterCard: {
        scanCard: 'Scan voter ID card',
        takePhotoFront: 'Take a photo of the front side o your voter card',
        takePhotoBack: 'Take a photo of the back side o your voter card',
        centerPhoto: 'Move and center the card inside the frame',
      },
      confirmPhoto: {
        voterCard: 'Voter card',
        frontSidePhoto: 'Photo of the front side of your voter card',
        backSidePhoto: 'Photo of the back side of your voter card',
        usePhoto: 'Use this photo',
        takeAnotherPhoto: 'Take another photo',
      },
      confirmation: {
        errorHeader: 'Something went wrong',
        errorText: 'There was a problem submitting data. Please try again.',
        successHeader: 'Your registration is submitted',
        successText: 'We are currently validating your identity. In 48h you will receive an SMS to confirm your account creation',
        tryAgain: 'Try Again',
        seeStatus: 'See status',
      },
      additionalInformation: {
        addLastDetails: 'Add the last details',
        provideMoreDetails: 'Provide some more details to complete your registration.',
        addressInformation: 'Address information',
        address: 'Address *',
        number: 'Number',
        postCode: 'Post code',
        town: 'Town *',
        district: 'District *',
        submit: 'Submit',
      },
      generalInformation: {
        reviewDetails: 'Review your details',
        reviewConfirmInformation: 'Review and confirm the information. If needed, you can edit it.',
        phoneNumber: 'Phone number',
        personalInformation: 'Personal Information',
        firstName: 'First name',
        lastName: 'Last name',
        dateOfBirth: 'Date of birth',
        placeOfBirth: 'Place of birth',
        gender: 'Gender',
        citizenNationality: 'Citizen / Nationality',
        voterNumber: 'Voter number',
        attachedPhotos: 'Attached photos',
        continue: 'Continue',
      },
      selfie: {
        selfie: 'Selfie',
        takeSelfie: 'Take a selfie',
      },
      status: {
        errorStatusHeading: 'Account not created',
        errorStatusText: 'We were unable to validate your identity. You can register again using more accurate photos or other documents',
        tryAgain: 'Try Again',
        successStatusHeading: 'Creating your account',
        successStatusText: 'We have successfully validated your identity. Shortly you will receive an SMS to confirm your account creation',
        ok: 'Ok',
        loadingStatusHeading: 'Validating your identity',
        loadingStatusText: 'We are still validating your identity. Shortly you will receive an SMS to confirm your account creation',
      },
    },
  },
  {
    id: 2,
    code: 'pt',
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
      submitAndValidate: {
        scanVoterID: 'Digitalizar cartão de eleitor',
        validating: 'Aguarde um momento, estamos validando a sua identidade.',
        photoUnclear: 'A foto não é nítida',
        photoUnclearDescription1: 'Ocorreu um problema ao enviar dados.',
        photoUnclearDescription2: 'Por favor tente novamente.',
      },
      validation: {
        validationHeader: 'Digitalização do documento e selfie',
        validationText: 'Nos próximos passos, digitalize o seu cartão de identificação (frente e verso) e uma foto selfie.',
        continue: 'Continuar',
      },
      modal: {
        cancel: 'Cancelar',
        delete: 'Apagar',
        deleteCardPhoto: 'Apagar foto do cartão',
        deleteFrontPhotoConfirmation: 'Tem certeza de que deseja apagar a foto selecionada?',
        deleteBackPhotoConfirmation: 'Tem certeza de que deseja apagar a foto selecionada?',
        deleteSelfiePhoto: 'Excluir foto de selfie',
        deleteSelfiePhotoConfirmation: 'Tem certeza que deseja excluir esta foto, sua foto de selfie?',
      },
      header: {
        regStatus: 'Estado',
        regConfirmation: 'Confirmação',
        regAdditionalInformation: 'Informações Adicionais',
        regGeneralInformation: 'Informações Gerais',
        regVoterCard: 'Cartão de Eleitor',
        regSelfie: 'Selfie',
        regPhoneNumber: 'Número de Telefone',
        regScanSelfie: 'Digitalização e Selfie',
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
        continue: 'Continuar',
        validNumber: 'Insira um número válido.',
        mobilePhone: 'Número de telemóvel',
        forAccountSettup: 'Precisamos do seu número de telemóvel (celular) para configurar a conta e para fins de segurança.',
        pleaseConfirm: 'Confirme o seu número de telefone',
        verificationSentTo: 'Enviamos um código de verificação de para',
        codeIncorrect: 'Código incorreto',
        tryAgainCode: 'Por favor, tente inserir outro número de código. Use a opcao de reenviar código.',
        resendCode: 'Reenviar código',
      },
      scanVoterCard: {
        scanCard: 'Digitalize o cartão de eleitor',
        takePhotoFront: 'Tire uma foto da frente do seu cartão de eleitor',
        takePhotoBack: 'Tire uma foto do verso do seu cartão de eleitor',
        centerPhoto: 'Mova e centralize o cartão dentro da moldura',
      },
      confirmPhoto: {
        voterCard: 'Cartão de Eleitor',
        frontSidePhoto: 'Foto frontal do seu cartão de eleitor',
        backSidePhoto: 'Foto do verso do seu cartão de eleitor',
        usePhoto: 'Usar esta foto',
        takeAnotherPhoto: 'Tirar outra foto',
      },
      confirmation: {
        errorHeader: 'Ocorreu algo de errado',
        errorText: 'Ocorreu um problema ao submeter os seus dados. Por favor, tente novamente.',
        successHeader: 'O seu registro foi submetido com sucesso',
        successText: 'Estamos atualmente validando os dados por si submetidos. Em 48h você receberá um SMS para confirmar a criação da sua conta ',
        tryAgain: 'Tente novamente',
        seeStatus: 'Visualizar o estado',
      },
      additionalInformation: {
        addLastDetails: 'Adicionar os últimos detalhes',
        provideMoreDetails: 'Forneça mais alguns detalhes para concluir seu registro.',
        addressInformation: 'Informações de endereço',
        address: 'Endereço *',
        number: 'Número',
        postCode: 'Código postal',
        town: 'Cidade *',
        district: 'Distrito *',
        submit: 'Enviar',
      },
      generalInformation: {
        reviewDetails: 'Revise seus dados',
        reviewConfirmInformation: 'Queira por favor verificar e confirmar os seus dados. Se necessário, você pode editá-lo. ',
        phoneNumber: 'Número de telefone',
        personalInformation: 'Informações pessoais',
        firstName: 'Nome',
        lastName: 'Apelido',
        dateOfBirth: 'Data de nascimento',
        placeOfBirth: 'Local de nascimento',
        gender: 'Gênero',
        citizenNationality: 'Nacionalidade',
        voterNumber: 'Número de eleitor',
        attachedPhotos: 'Fotos anexadas',
        continue: 'Continuar',
      },
      selfie: {
        selfie: 'Selfie',
        takeSelfie: 'Tirar uma selfie',
      },
      status: {
        errorStatusHeading: 'Conta não criada',
        errorStatusText: 'Não foi possível validar os seus dados de identidade. Você podera se registrar novamente usando fotos mais precisas ou outros documentos ',
        tryAgain: 'Tente novamente',
        successStatusHeading: 'Criando a sua conta',
        successStatusText: 'Os seus dados foram validados com sucesso. Em breve você receberá ums SMS para confirmar a criação da sua conta',
        ok: 'Ok',
        loadingStatusHeading: 'Validando os seus dados',
        loadingStatusText: 'Ainda estamos validando sua identidade. Em breve você receberá um SMS para confirmar a criação da sua conta',
      },
    },
  },
  {
    id: 3,
    code: 'it',
    name: 'Italian',
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
      submitAndValidate: {
        scanVoterID: 'Scansione carta d\'identità',
        validating: 'Solo un momento stiamo convalidando la tua identità',
        photoUnclear: 'La foto non è chiara.',
        photoUnclearDescription1: 'Si è verificato un problema durante l\'invio dei dati.',
        photoUnclearDescription2: 'Per favore riprova.',
      },
      validation: {
        validationHeader: 'Scansione documento di identità e selfie',
        validationText: "Nelle schermate successive, ti verrà richiesto di scansionare la tua carta d'identità (fronte e retro) e dovrai anche farti un selfie.",
        continue: 'Proseguir',
      },
      modal: {
        cancel: 'Annulla',
        delete: 'Elimina',
        deleteCardPhoto: "Elimina foto carta d'identità",
        deleteFrontPhotoConfirmation: "Sei sicuro di voler eliminare la foto della tua carta d'identità nazionale?",
        deleteBackPhotoConfirmation: "Sei sicuro di voler eliminare la foto della tua carta d'identità nazionale?",
        deleteSelfiePhoto: 'Elimina foto selfie',
        deleteSelfiePhotoConfirmation: 'Sei sicuro di voler eliminare questa foto, la tua foto selfie?',
      },
      header: {
        regStatus: 'Stato',
        regConfirmation: 'Conferma',
        regAdditionalInformation: 'Informazioni Aggiuntive',
        regGeneralInformation: 'Informazioni Generali',
        regVoterCard: 'Carta del Voto',
        regSelfie: 'Selfie',
        regPhoneNumber: 'Numero di Telefono',
        regScanSelfie: 'Scansione e selfie',
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
        pleaseConfirm: 'Conferma il tuo numero di telefono',
        verificationSentTo: 'Abbiamo appena inviato un codice di verifica a',
        codeIncorrect: 'Codice errato',
        tryAgainCode: "Prova a inserire un altro numero di codice. Usa l'opzione di reinvio del codice.",
        reendCode: 'Reinvia codice',
      },
      scanVoterCard: {
        scanCard: 'Scansiona la tessera elettorale',
        takePhotoFront: 'Scatta una foto della parte anteriore della tua tessera elettorale',
        takePhotoBack: 'Scatta una foto del retro della tua tessera elettorale',
        centerPhoto: 'Sposta e centra la carta all\'interno della cornice',
      },
      confirmPhoto: {
        voterCard: 'Tessera elettorale',
        frontSidePhoto: 'Foto frontale della tua tessera elettorale',
        backSidePhoto: 'Foto del retro della tessera elettorale',
        usePhoto: 'Usa questa foto',
        takeAnotherPhoto: 'Fai un\'altra foto',
      },
      confirmation: {
        errorHeader: 'Qualcosa è andato storto',
        errorText: "Si è verificato un problema durante l'invio dei dati. Per favore riprova.",
        successHeader: 'Il tuo record è stato inviato con successo',
        successText: 'Stiamo attualmente convalidando i dati che hai inviato. Entro 48 ore riceverai un SMS per confermare la creazione del tuo account ',
        tryAgain: 'Riprova',
        seeStatus: 'Visualizza stato',
      },
      additionalInformation: {
        addLastDetails: 'Aggiungi ultimi dettagli',
        provideMoreDetails: 'Fornisci ulteriori dettagli per completare la registrazione.',
        addressInformation: "Informazioni sull'indirizzo",
        address: 'Indirizzo *',
        number: 'Numero',
        postCode: 'codice postale',
        town: 'Città *',
        district: 'Distretto *',
        submit: 'Invia',
      },
      generalInformation: {
        reviewDetails: 'Rivedi i tuoi dati',
        reviewConfirmInformation: 'Verifica e conferma i tuoi dati. Se necessario, puoi modificarlo.',
        phoneNumber: 'Numero di telefono',
        personalInformation: 'Informazioni personali',
        firstName: 'Nome',
        lastName: 'Cognome',
        dateOfBirth: 'Data di nascita',
        placeOfBirth: 'Luogo di nascita',
        gender: 'Genere',
        citizenNationality: 'Nazionalità',
        voterNumber: 'Numero tessera elettorale',
        attachedPhotos: 'Foto allegate',
        continua: 'Proseguire',
      },
      selfie: {
        selfie: 'Selfie',
        takeSelfie: 'Fatti un selfie',
      },
      status: {
        errorStatusHeading: 'Account non creato',
        errorStatusText: 'Non siamo stati in grado di convalidare la tua identità. Puoi registrarti di nuovo utilizzando foto più accurate o altri documenti',
        tryAgain: 'Riprova',
        successStatusHeading: 'Creazione del tuo account',
        successStatusText: 'Abbiamo convalidato con successo la tua identità. A breve riceverai un SMS per confermare la creazione del tuo account',
        loadingStatusHeading: 'Convalida della tua identità',
        loadingStatusText: 'Stiamo ancora convalidando la tua identità. A breve riceverai un SMS per confermare la creazione del tuo account',
        ok: 'Ok',
      },
    },
  },
];
