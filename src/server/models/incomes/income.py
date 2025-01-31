class Income:
    def __init__(self, title, amount, recurring, frequency, email, created_at):
        self.title = title
        self.amount = amount
        self.recurring = recurring
        self.frequency = frequency 		# Not a required field
        self.email = email
        self.created_at = created_at
