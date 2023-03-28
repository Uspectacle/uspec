
# Input variable definitions

variable "eb_app_name" {
  description = "Name of the application."
  type        = string
}

variable "eb_app_description" {
  description = "Description of the application."
  type        = string
}

variable "tags" {
  description = "Tags to set elastic beanstalk app."
  type        = map(string)
  default     = {}
}

