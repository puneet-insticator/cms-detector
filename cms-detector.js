//console.log("Injected!!!");

var strGenerator = getMetaContent('generator');
if(strGenerator == false) {
   strGenerator = getMetaContent('Generator');
}

/*
alert('l-'+getMetaContent('generator'));
*/
var cmsAlias      = detectCMS();
var cmsGenerator  = strGenerator;

chrome.runtime.sendMessage("opmebniconiehkmppehflipekdaldego", { alias: cmsAlias, generator: cmsGenerator });


function detectCMS() {
   if(strGenerator.indexOf("Contao") > -1)                           { return 'contao' }
   if(strGenerator.indexOf("WordPress") > -1)                        { return 'wordpress' }
   if(strGenerator.indexOf("Joomla") > -1)                           { return 'joomla' }
   if(strGenerator.indexOf("Drupal") > -1)                           { return 'drupal' }
   if(strGenerator.indexOf("TYPO3") > -1)                            { return 'typo3' }
   
   
   
   return 'undefined';
}

function getMetaContent(strProperty) { 
   var metas = document.getElementsByTagName('meta'); 

   for (i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("name") == strProperty || metas[i].getAttribute("property") == strProperty) { 
         return metas[i].getAttribute("content"); 
      } 
   } 
   return false;
}
