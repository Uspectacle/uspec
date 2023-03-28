
# Input variable definitions

variable "eb_app_env_name" {
  description = "Name of the environment."
  type        = string
}

variable "eb_app_name" {
  description = "Name of the environment."
  type        = string
}

variable "tags" {
  description = "Tags to set on the elastic beanstalk app environment."
  type        = map(string)
  default     = {}
}

