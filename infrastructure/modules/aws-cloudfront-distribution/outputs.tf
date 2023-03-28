# Output variable definitions

output "domain_name" {
  description = " Domain name of the distribution."
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
}

output "arn" {
  description = "ARN of the distribution."
  value       = aws_cloudfront_distribution.s3_distribution.arn
}
