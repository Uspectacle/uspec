provider "aws" {
  profile = "uspec"
  region  = "us-east-1"
  alias   = "useast1"
}

resource "aws_acm_certificate" "cert" {
  provider          = aws.useast1
  domain_name       = var.domain_name
  validation_method = "DNS"

  tags = var.tags

  lifecycle {
    create_before_destroy = true
  }
}