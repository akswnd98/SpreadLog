const SYMBOLS = {
  App: Symbol.for('App'),
  AppNavigator: Symbol.for("AppNavigator"),
  AppBody: Symbol.for('AppBody'),
  AccountPageElement: Symbol.for('AccountPageElement'),
  PostGraphElement: Symbol.for('PostGraphElement'),
  PostGraphNewNodeDialogPopup: Symbol.for('PostGraphNewNodeDialogPopup'),
  LoginPopupBodyLeft: Symbol.for('LoginPopupBodyLeft'),
  LoginPopupBodyRight: Symbol.for('LoginPopupBodyRight'),
  LoginProcessElement: Symbol.for('LoginProcessElement'),
  LoginProcessInputWrapper: Symbol.for('LoginProcessInputWrapper'),
  SignUpProcessElement: Symbol.for('SignUpProcessElement'),
  SignUpProcessInputWrapper: Symbol.for('SignUpProcessInputWrapper'),

  GraphVis: Symbol.for('GraphVis'),
  BlogPost: Symbol.for('BlogPost'),
  PostingId: Symbol.for('PostingId'),
  PostingPost: Symbol.for('PostingPost'),
  PostingIdNotifier: Symbol.for('PostingIdNotifier'),
  PostingPostObserver: Symbol.for('PostingPostObserver'),
  PostingPostNotifier: Symbol.for('PostingPostNotifier'),
  BlogPostObserver: Symbol.for('BlogPostObserver'),

  LoginPopup: Symbol.for('LoginPopup'),
  LoginPopupBody: Symbol.for('LoginPopupBody'),

  CurrentLoginEmail: Symbol.for('CurrentLoginEmail'),
  CurrentLoginPasswd: Symbol.for('CurrentLoginPasswd'),
  CurrentSignUpEmail: Symbol.for('CurrentSignUpEmail'),
  CurrentSignUpPasswd: Symbol.for('CurrentSignUpPasswd'),
  CurrentSignUpPasswdCheck: Symbol.for('CurrentSignUpPasswdCheck'),
  CurrentSignUpNickname: Symbol.for('CurrentSignUpNickname'),
  CurrentSignUpCertSerial: Symbol.for('CurrentSignUpCertSerial'),

  CurrentLoginEmailSetter: Symbol.for('CurrentLoginEmailSetter'),
  CurrentLoginEmailGetter: Symbol.for('CurrentLoginEmailGetter'),
  CurrentLoginPasswdSetter: Symbol.for('CurrentLoginPasswdSetter'),
  CurrentLoginPasswdGetter: Symbol.for('CurrentLoginPasswdGetter'),
  CurrentSignUpEmailSetter: Symbol.for('CurrentSignUpEmailSetter'),
  CurrentSignUpEmailGetter: Symbol.for('CurrentSignUpEmailGetter'),
  CurrentSignUpPasswdSetter: Symbol.for('CurrentSignUpPasswdSetter'),
  CurrentSignUpPasswdGetter: Symbol.for('CurrentSignUpPasswdGetter'),
  CurrentSignUpPasswdCheckSetter: Symbol.for('CurrentSignUpPasswdCheckSetter'),
  CurrentSignUpPasswdCheckGetter: Symbol.for('CurrentSignUpPasswdCheckGetter'),
  CurrentSignUpNicknameSetter: Symbol.for('CurrentSignUpNicknameSetter'),
  CurrentSignUpNicknameGetter: Symbol.for('CurrentSignUpNicknameGetter'),
  CurrentSignUpCertSerialSetter: Symbol.for('CurrentSignUpCertSerialSetter'),
  CurrentSignUpCertSerialGetter: Symbol.for('CurrentSignUpCertSerialGetter'),

  LoginPopupModel: Symbol.for('LoginPopupModel'),
  LoginPopupStateGetter: Symbol.for('LoginPopupStateGetter'),
  ChangeLoginPopupStateToLogin: Symbol.for('ChangeLoginPopupStateToLogin'),
  ChangeLoginPopupStateToSignUp: Symbol.for('ChangeLoginPopupStateToSignUp'),

  LoginProcessBaseState: Symbol.for('LoginProcessBaseState'),
  LoginProcessPasswdState: Symbol.for('LoginProcessPasswdState'),
  LoginProcessBaseToPasswdCommand: Symbol.for('LoginProcessBaseToPasswdCommand'),
  LoginProcessChain: Symbol.for('LoginProcessChain'),
  GetCurLoginProcessState: Symbol.for('GetCurLoginProcessState'),
  ReceiveLoginProcessCommand: Symbol.for('ReceiveLoginProcessCommand'),
  UndoLastLoginProcessCommand: Symbol.for('UndoLastLoginProcessCommand'),

  SignUpProcessBaseToPasswdCommand: Symbol.for('SignUpProcessBaseToPasswdCommand'),
  SignUpProcessPasswdToPasswdCheckCommand: Symbol.for('SignUpProcessPasswdToPasswdCheckCommand'),
  SignUpProcessPasswdCheckToNickNameCommand: Symbol.for('SignUpProcessPasswdCheckToNickNameCommand'),
  SignUpProcessNickNameToEmailSentCommand: Symbol.for('SignUpProcessNickNameToEmailSentCommand'),

  SignUpProcessBaseState: Symbol.for('SignUpProcessBaseState'),
  SignUpProcessPasswdState: Symbol.for('SignUpProcessPasswdState'),
  SignUpProcessPasswdCheckState: Symbol.for('SignUpProcessPasswdCheckState'),
  SignUpProcessNickNameState: Symbol.for('SignUpProcessNickNameState'),
  SignUpConfermedState: Symbol.for('SignUpConfermedState'),

  SignUpProcessChain: Symbol.for('SignUpProcessChain'),
  GetCurSignUpProcessState: Symbol.for('GetCurSignUpProcessState'),
  ReceiveSignUpProcessCommand: Symbol.for('ReceiveSignUpProcessCommand'),
  UndoLastSignUpProcessCommand: Symbol.for('UndoLastSignUpProcessCommand'),

  PostingPostBodyObserver: Symbol.for('PostingPostBodyObserver'),
  PostingPostDateObserver: Symbol.for('PostingPostDateObserver'),
  PostingPostTitleObserver: Symbol.for('PostingPostTitleObserver'),

  AccountPageNickname: Symbol.for('AccountPageNickname'),
  AccountPageNicknameGetter: Symbol.for('AccountPageNicknameGetter'),
  AccountPageNicknameSetter: Symbol.for('AccountPageNicknameSetter'),

  PostGraph: Symbol.for('PostGraph'),
  InitialPostNodes: Symbol.for('InitialPostNodes'),
  InitialPostEdges: Symbol.for('InitialPostEdges'),
  PostGraphAddNode: Symbol.for('PostGraphAddNode'),
  PostGraphDeleteNode: Symbol.for('PostGraphDeleteNode'),
  PostGraphAddEdge: Symbol.for('PostGraphAddEdge'),
  PostGraphDeleteEdge: Symbol.for('PostGraphDeleteEdge'),
  PostGraphGetAllNodes: Symbol.for('PostGraphGetAllNodes'),
  PostGraphGetAllEdges: Symbol.for('PostGraphGetAllEdges'),

  ContextMenuPopup: Symbol.for('ContextMenuPopup'),
  NodeContextMenuSelectedId: Symbol.for('NodeContextMenuSelectedId'),
  NodeContextMenuSelectedIdGetter: Symbol.for('NodeContextMenuSelectedIdGetter'),
  NodeContextMenuSelectedIdSetter: Symbol.for('NodeContextMenuSelectedIdSetter'),
  EdgeContextMenuSelectedId: Symbol.for('EdgeContextMenuSelectedId'),
  EdgeContextMenuSelectedIdGetter: Symbol.for('EdgeContextMenuSelectedIdGetter'),
  EdgeContextMenuSelectedIdSetter: Symbol.for('EdgeContextMenuSelectedIdSetter'),
  CurrentNewNodeTitle: Symbol.for('CurrentNewNodeTitle'),
  CurrentNewNodeTitleGetter: Symbol.for('CurrentNewNodeTitleGetter'),
  CurrentNewNodeTitleSetter: Symbol.for('CurrentNewNodeTitleSetter'),
};

export {
  SYMBOLS,
};
