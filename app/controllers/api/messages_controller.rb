class Api::MessagesController < ApplicationController
  def create
    message = current_user.messages.create(
      email: cirremt_user.email,
      body: params[:body]
    )
    
    MessageBus.publish "/chat_channel", message.attributes
  end
end
