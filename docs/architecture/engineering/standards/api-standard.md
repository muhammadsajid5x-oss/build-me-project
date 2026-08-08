# API Standard

## Purpose

Ensure all APIs follow a consistent contract.

## Every API Must Define

### Request

```json
{
  "data": {}
}
```

### Response

```json
{
  "success": true,
  "data": {}
}
```

### Error Response

```json
{
  "message": "error"
}
```

## API Rules

- Use RESTful endpoints.
- Return consistent JSON responses.
- Validate request payloads.
- Use meaningful HTTP status codes.
- Document APIs in Postman.
