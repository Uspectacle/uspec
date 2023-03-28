# Input variable definitions

variable "db_password" {
  description = "Database password."
  type        = string
}

variable "db_username" {
  description = "Database username."
  type        = string
}

variable "db_name" {
  description = "Database name."
  type        = string
}

variable "tags" {
  description = "Tags to set on RDS database."
  type        = map(string)
  default     = {}
}

