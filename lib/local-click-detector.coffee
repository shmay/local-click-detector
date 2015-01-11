localCount = 0
docCount = 0

Polymer "local-click-detector",
  attached: ->
    parent = @parentNode
    @host = if parent.host then parent.host else parent

    @listenEvent = if bowser.ios then 'touchstart' else 'click'
    @setupListeners()

  detached: ->
    @rmListeners()

  setupListeners: ->
    h = @host

    @localClickListener = -> 
      localCount += 1
      h.clickedLocally = true

    @docClickListener = -> 
      if localCount > docCount
        docCount += 1
      else
        localCount = docCount = 0
        h.clickedLocally = false

    document.addEventListener @listenEvent, @docClickListener
    h.addEventListener @listenEvent, @localClickListener

  rmListeners: ->
    @host.removeEventListener @listenEvent, @localClickListener
    document.removeEventListener @listenEvent, @docClickListener
