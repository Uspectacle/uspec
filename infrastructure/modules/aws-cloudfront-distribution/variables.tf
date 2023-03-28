
# Input variable definitions

variable "bucket_domain_name" {
  description = "Domain name of the bucket."
  type        = string
}

variable "bucket_origin_id" {
  description = "Origin ID of the bucket."
  type        = string
}
variable "tags" {
  description = "Tags to set on the cloudfront distribution."
  type        = map(string)
  default     = {}
}

