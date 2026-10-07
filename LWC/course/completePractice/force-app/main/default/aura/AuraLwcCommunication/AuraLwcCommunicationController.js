({
    handleMessage : function(component, event) {
        let msg = event.getParam('title');
        component.set("v.message", msg)
    }

    
})