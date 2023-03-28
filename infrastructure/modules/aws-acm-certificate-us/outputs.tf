# Output variable definitions

output "validation_options" {
  description = " Validation options of the certificate."
  value       = aws_acm_certificate.cert.domain_validation_options
}