
/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if(msg != 'undefined') {
       chrome.tabs.getSelected(null, function(tab) {
          if(msg.alias == false) {
             chrome.pageAction.setTitle({tabId: tab.id, title: 'Could not detect CMS, Meta-Generator: '+msg.generator});
          } else {
             chrome.pageAction.setIcon({tabId: tab.id, path: 'icons/'+msg.alias+'.png'});
             chrome.pageAction.setTitle({tabId: tab.id, title: 'Detected CMS: '+msg.generator});
          }
          chrome.pageAction.show(tab.id);
       });
    }
});