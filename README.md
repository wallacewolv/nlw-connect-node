# Drizzle
- Gerar sql para as tabelas -> npx drizzle-kit generate
- Gerar migrations -> npx drizzle-kit migrate

# Status Code(s)
- 301: redirect permanente
- 302: redirect temporário

# Redis
- Método para listar tudo o que foi inserido no banco com a chave referral:access-count
  - await redis.hgetall('referral:access-count')