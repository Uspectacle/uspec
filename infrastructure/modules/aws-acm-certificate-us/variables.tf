
# Input variable definitions

variable "domain_name" {
  description = "Domain name of the certificate."
  type        = string
}

variable "tags" {
  description = "Tags to set on the certificate."
  type        = map(string)
  default     = {}
}

