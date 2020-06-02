

class Employee

    attr_reader :name, :title, :salary 
    attr_accessor :boss

    def initialize(name, salary, title, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def inspect
        @name
    end

    def bonus(multiplier)
        @bonus = self.salary * multiplier
    end
    
end

class Manager < Employee
    attr_reader :employees
    
    def initialize(name, salary, title, boss = nil)
        super(name, salary, title, boss = nil) 
        @employees = []
    end 

    def inspect
        @name
    end

    def employees_flatten
        all_subordinates = []
        # if self.employees.empty?
        #     return all_subordinates += self
        # else
        self.employees.each do |emp|
            if emp.is_a?(Manager) 
                all_subordinates << emp
                all_subordinates += emp.employees_flatten
            else 
                all_subordinates << emp
            end
        end
        all_subordinates.uniq
    end

    def bonus(multiplier)
        all_subordinates = self.employees_flatten
        salaries = all_subordinates.inject(0) do |acc, emp|
            if emp.is_a?(Manager)
                emp.bonus(1)
            end 
            acc + emp.salary 
        end 
        @bonus = salaries * multiplier
    end 

    def add_employee(*employee)
        @employees += employee
        employee.each {|emp| emp.boss = self}
    end 
    
end 

david = Employee.new("David", 10000, "TA")
shawna = Employee.new("Shawna", 12000, "TA")
darren = Manager.new("Darren", 78000, "TA Manager")
ned = Manager.new("Ned", 1000000, "Founder")
ned.add_employee(darren)
darren.add_employee(shawna,david)


# p ned.employees_flatten
#ned.employees_flatten.each {|emp| p emp.name}
#p darren.employees_flatten

p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000