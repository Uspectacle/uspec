output "backend_endpoint_url" {
  description = "Endpoint url of the backend"
  value       = module.backend_elastic_beanstalk_env.endpoint_url
}

output "database_endpoint" {
  description = "Endpoint of the database"
  value       = module.database.endpoint
}

output "database_port" {
  description = "Port of the database"
  value       = module.database.port
}

output "frontend_cert_validation" {
  description = "Certificate validation options"
  value       = module.frontend_certificate.validation_options
}

output "backend_cert_validation" {
  description = "Certificate validation options"
  value       = module.backend_certificate.validation_options
}