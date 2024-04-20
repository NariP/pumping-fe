echo "Generating API client from swagger"
npx swagger-typescript-api -p https://pumping-coin-app-api.incognita-inc.com/v3/api-docs -o ./app/@types/swagger -n index.ts  --extract-request-params --extract-request-body --extract-response-body --enum-names-as-values --union-enums --extract-enums --add-readonly --sort-types --no-client
echo "Done"