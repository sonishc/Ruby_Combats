require 'faye'

Faye::WebSocket.load_adapter('thin') 
bayeux = Faye::RackAdapter.new(:mount => '/faye', :timeout => 25)

# bayeux.listen(9292)
run bayeux

# require 'faye'
# Faye::WebSocket.load_adapter('thin')
# faye_server = Faye::RackAdapter.new(:mount => '/faye', :timeout => 25)
# run faye_server