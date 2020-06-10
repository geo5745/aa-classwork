require 'singleton'
require 'sqlite3'

class QuestionsDatabase < SQLite3::Database
    include Singleton

    def initialize
        super('questions.db')
        self.type_translation = true
        self.results_as_hash = true
    end
end

class Question
    attr_accessor :id, :title, :body, :author_id
    
    # def self.find_by_author_test(author)
    #     query = "select * from questions where author_id = ?"
    #     auth = QuestionsDatabase.instance.execute(query,author)
    #     Question.new(auth)
    # end
    
    
    def self.find_by_author_id(author_id) 
        questions = QuestionsDatabase.instance.execute(<<-SQL, author_id)
            SELECT
                *
            FROM
                questions
            WHERE
                author_id = ?
        SQL

        return nil unless questions.length > 0

        questions.map { |question| Question.new(question) }
    end

    # def self.all
    #     ids = QuestionsDatabase.instance.execute("SELECT * FROM questions")
    #     ids.map { |id| Question.new(id) }
    # end

    def initialize(inputs)
        @id = inputs['id']
        @title = inputs['title']
        @body = inputs['body']
        @author_id = inputs['author_id']
    end

    def author
        user_array = User.find_by_user_id(self.author_id)
    end





end

class User
    attr_accessor :id, :fname, :lname
    def self.find_by_name(fname, lname)
        names = QuestionsDatabase.instance.execute(<<-SQL, fname, lname)
            SELECT
                *
            FROM
                users
            WHERE
                fname like ? AND lname like ?
        SQL

        names.map { |name| User.new(name) }
    end
    
    def self.all
        ids = QuestionsDatabase.instance.execute("SELECT * FROM users")
        ids.map { |id| User.new(id) }
    end

    def self.find_by_user_id(user_id)
        users = QuestionsDatabase.instance.execute(<<-SQL, user_id)
        SELECT
            *
        FROM
            users
        WHERE
            id = ?
        SQL
        return nil unless users.length > 0
        User.new(users.first)
    end


    def initialize(inputs)
        @id = inputs['id']
        @fname = inputs['fname']
        @lname = inputs['lname']
    end

    def authored_questions
        Question.find_by_author_id(self.id)
    end

    def authored_replies
        Reply.find_by_user_id(self.id)
    end


end

class QuestionFollow
    attr_accessor :id, :user_id, :question_id

    def self.find_by_id
        ids = QuestionsDatabase.instance.execute("SELECT * FROM question_follows")
        ids.map { |id| QuestionFollow.new(id) }
    end

    def initialize(inputs)
        @id = inputs['id']
        @user_id = inputs['user_id']
        @question_id = inputs['question_id']
    end

end

class Reply
    attr_accessor :id, :parent_id, :user_id, :question_id, :body
    def self.find_by_user_id(user_id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, user_id)
            SELECT
                *
            FROM
                replies
            WHERE
                user_id = ?
        SQL

        return nil unless replies.length > 0

        replies.map { |reply| Reply.new(reply) }

    end

    def self.find_by_question_id(question_id)
        replies = QuestionsDatabase.instance.execute(<<-SQL, question_id)
            SELECT
                *
            FROM
                replies
            WHERE
                question_id = ?
        SQL

        return nil unless replies.length > 0
        replies.map { |reply| Reply.new(reply) }
    end

    def initialize(inputs)
        @id = inputs['id']
        @parent_id = inputs['parent_id']
        @user_id = inputs['user_id']
        @question_id = inputs['question_id']
        @body = inputs['body']
    end

    


end


class QuestionLike
    attr_accessor :id, :user_id, :question_id
    
    def self.find_by_id
        ids = QuestionsDatabase.instance.execute("SELECT * FROM question_likes")
        ids.map { |id| QuestionLike.new(id) }
    end

    def initialize(inputs)
        @id = inputs['id']
        @user_id = inputs['user_id']
        @question_id = inputs['question_id']
    end
    
end
