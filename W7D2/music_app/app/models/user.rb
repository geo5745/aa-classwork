class User < ApplicationRecord
    attr_reader :password
    
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: {message: 'Password cant be blank'} 
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token
    
    def self.find_by_credentials(email,password)
        user = self.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bc_password = BCrypt::Password.new(password_digest)
        bc_password.is_password?(password)
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save
        self.session_token
    end

    private
    
    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def landing
        render :landing
    end


end