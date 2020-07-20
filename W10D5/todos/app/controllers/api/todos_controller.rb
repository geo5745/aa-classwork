class Api::TodosController < ApplicationController
    
    def show
        # debugger
        render json: Todo.find(params[:id])
    end
      
    def create
        # debugger
        @todo = Todo.new(todo_params)
        if @todo.save
          render json: @todo
        else
          render json: @todo.errors.full_messages, status: 422
        end
    end

    def index
        # debugger
        @todos = Todo.all
        render json: @todos
    end

    def destroy

    end

    def todo_params
       params.require(:todo).permit(:id, :title, :body, :done)
    end

    
end