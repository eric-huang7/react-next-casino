if (typeof lhc_var === 'undefined') { // This variable has to be defined before Live Helper Chat embed script.
  window.lhc_var = {}; // Window is required to define variable in global scope
};

lhc_var.site_id = '1';
lhc_var.email = 'testme@example.com';
lhc_var.user_id = '14';
// This variable has to be defined before Live Helper Chat embed script.
var LHCChatOptions = {};
LHCChatOptions.attr = new Array();
LHCChatOptions.attr.push({'name':'User ID','value':'$user->id', 'type':'hidden'});
LHCChatOptions.attr.push({'name':'Username','value':' $user->username ', 'type':'hidden'});
LHCChatOptions.attr.push({'nick':'nick','value':'$user->username ', 'type':'hidden'});
LHCChatOptions.attr.push({'name':'E-mail','value':' $user->email ', 'type':'hidden', 'type':'hidden'});
LHCChatOptions.attr_prefill = new Array();
LHCChatOptions.attr_prefill.push({'name':'email','value':'***.com','hidden':true});
LHCChatOptions.attr_prefill.push({'name':'phone','value':'370454654'});
LHCChatOptions.attr_prefill.push({'name':'username','value':'tbd auth user'});
LHCChatOptions.attr_prefill.push({'name':'server','value':'http://t-gpb.slotsidol.com:7000'});

var LHC_API = LHC_API||{};
LHC_API.args = {mode:'widget',lhc_base_url:'//cas_faa68_deskpro.coredata.eu:82/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,leaveamessage:true,theme:1,check_messages:false};
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
  var date = new Date();po.src = '//cas_faa68_deskpro.coredata.eu:82/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();