import React, {useEffect} from "react";
import styles from "../stylesheets/documentationText.module.css";
import Prism from "prismjs";
import "../stylesheets/prism.css"

const DocumentationText = props => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className={styles.documentationText}>
      <h1 className={styles.mainHeading}>API Documentation</h1>
      <p className={styles.paragraph}>
        The Drunken Bytes API was built to provide a simple way of accessing
        global aviation data for real-time and historical flights as well as
        allow customers to tap into an extensive data set of airline routes and
        other up-to-date aviation-related information. Requests to the REST API
        are made using a straightforward HTTP GET URL structure and responses
        are provided in lightweight JSON format.
      </p>
      <p className={styles.paragraph}>
        The following API documentation can be applied for any major programming
        langauge and will present general integration guides and explanations
        around API endpoints, request parameters and response objects. If any
        questions remain unanswered for you, simply reach out to the drunken
        bytes support team for assistance.
      </p>

      <h2 className={styles.heading}>Getting Started</h2>
      <h3 className={styles.subHeading} id="api-access-key">API Access Key & Authentication</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        After creating an drunken bytes account, you will be able to retrieve
        your unique API access key using your account dashboard. Each drunken
        bytes account can have multiple API access key.
      </p>
      <p className={styles.paragraph}>
        To connect to the API, simply attach the api_key parameter to any valid
        API endpoint URL and set it to your api key. Also add the api secret in
        the Authentication Header as Bearer &lt;api_secret&gt;.
      </p>
      <p className={styles.paragraph}>Find a Nodejs example below.</p>

      <pre>
        <code className="language-javascript">
{`fetch(
  'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY', {
    method: "POST",
    body: JSON.stringify({
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      brandName: brandName,
      productName: productName,
      productId: productId,
      warrantyExpireDate: warrantyExpireDate,
      buyerMetamaskAddress: buyerMetamaskAddress,
      methodType: 0
  })
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + YOUR_API_SECRET
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
        </code>
      </pre>
      <div className={styles.warning}>
        <strong>Keek you key and secret safe</strong>: To prevent unauthorized
        access to your drunken bytes account, please make sure to keep your API
        access key safe at all times. You can always generate a new key using
        your account dashboard.
      </div>
      <h3 className={styles.subHeading} id="api-error">API Error</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        If your request to the drunken bytes API does not succeed, the API will
        return a JSON error response that contains error <code>code</code> and{" "}
        <code>message</code> objects indicating the type of error that occurred.
        The API also supports HTTP status codes, returning a code of{" "}
        <code>200</code> for successful requests, and an error status code (e.g.{" "}
        <code>404</code>) for failed requests.
      </p>
      <p className={styles.paragraph}>
        If a validation error occurs, hence, an API parameter is used in an
        invalid way, there will be an additional <code>context</code> object
        containing multiple sub-objects with the associated API parameter as the
        key and details about the given validation error(s) further sub-objects.
        Each instance of a validation error contains <code>key</code> and{" "}
        <code>message</code> objects.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example Error:</strong>
      </p>
      <pre>
        <code className="language-javascript">
{`{
  success: false ,
  error: {
    message: "Internal Server Error"
  }
}`}
        </code>
      </pre>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Common API Errors:</strong>
      </p>
      <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th> Type</th>
            <th> Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>403</code>
            </td>
            <td>
              <code>invalid_api_key</code>
            </td>
            <td>An invalid API access key was supplied.</td>
          </tr>
          <tr>
            <td>
              <code>401</code>
            </td>
            <td>
              <code>missing_access_key</code>
            </td>
            <td>No API access key was supplied.</td>
          </tr>
          <tr>
            <td>
              <code>401</code>
            </td>
            <td>
              <code>unauthorized_access</code>
            </td>
            <td>Authorization Header was not supplied.</td>
          </tr>
          <tr>
            <td>
              <code>403</code>
            </td>
            <td>
              <code>wallet_balance_is_insufficient</code>
            </td>
            <td>
              Wallet Balance required to execute the code is not sufficient.
            </td>
          </tr>
          <tr>
            <td>
              <code>404</code>
            </td>
            <td>
              <code>invalid_api_function</code>
            </td>
            <td>The given API endpoint does not exist.</td>
          </tr>
          <tr>
            <td>
              <code>404</code>
            </td>
            <td>
              <code>404_not_found</code>
            </td>
            <td>Resource not found.</td>
          </tr>
          <tr>
            <td>
              <code>500</code>
            </td>
            <td>
              <code>internal_error</code>
            </td>
            <td>An internal error occurred.</td>
          </tr>
        </tbody>
      </table>
</div>
      <h2 className={styles.heading}>API Endpoints</h2>
      <h3 className={styles.subHeading} id="create-nft">Create NFT</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        The API is capable of tracking flights and retrieving flight status
        information in real-time. In order to look up real-time information
        about one or multiple flights, you can use the API's flights endpoint
        together with optional parameters to filter your result set.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Request:</strong>
      </p>
      <pre>
        <code className="language-javascript">
        {`fetch(
  'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY', {
    method: "POST",
    body: JSON.stringify({
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      brandName: brandName,
      productName: productName,
      productId: productId,
      warrantyExpireDate: warrantyExpireDate,
      buyerMetamaskAddress: buyerMetamaskAddress,
      methodType: 0
  })
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + YOUR_API_SECRET
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
        </code>
      </pre>
      
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Response:</strong>
      </p>
      <pre>
        <code className="language-javascript">
{`{
  success: true ,
  data: {
    txid: TRANSACTION_HASH
  }
}`}
        </code>
      </pre>
      <div className={styles.info}>
        This Transaction Hash can be viewed at https://goerli.etherscan.io/tx/TRANACTION_HASH. It is just a initial code of a 
        process and you can view the status at Etherscan and we will also send you an email when the generation of your NFT is 
        complete.
      </div>

      <h3 className={styles.subHeading} id="transfer-nft">Transfer NFT</h3>
      <hr className={styles.hr} />
      <p className={styles.paragraph}>
        The API is capable of tracking flights and retrieving flight status
        information in real-time. In order to look up real-time information
        about one or multiple flights, you can use the API's flights endpoint
        together with optional parameters to filter your result set.
      </p>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Request:</strong>
      </p>
      <pre>
        <code className="language-javascript">
        {`fetch(
  'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY', {
    method: "POST",
    body: JSON.stringify({
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      brandName: brandName,
      productName: productName,
      productId: productId,
      warrantyExpireDate: warrantyExpireDate,
      buyerMetamaskAddress: buyerMetamaskAddress,
      methodType: 0
  })
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + YOUR_API_SECRET
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
        </code>
      </pre>
      <p className={styles.paragraph}>
        <strong className={styles.subTitle}>Example API Response:</strong>
      </p>
      <pre>
        <code className="language-javascript">
{`{
  success: true ,
  data: {
    txid: TRANSACTION_HASH
  }
}`}
        </code>
      </pre>
      <div className={styles.info}>
        This Transaction Hash can be viewed at https://goerli.etherscan.io/tx/TRANACTION_HASH. It is just a initial code of a 
        process and you can view the status at Etherscan and we will also send you an email when the generation of your NFT is 
        complete.
      </div>
      <h2 className={styles.heading} id="code-examples">Code Examples</h2>
      <p className={styles.paragraph}>
        A number of code examples in different programming languages were
        prepared for you to get up and running with the drunken bytes API as
        quickly as possible. You will find them below in PHP, Python, Node.js.,
        jQuery, Go and Ruby.
      </p>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="php">PHP</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`$url = 'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY'; 
$data = array('name' => 'John Doe', 'email' => 'john@example.com');
// For the list of arguments refer to the API Endpoint Section
$token = 'your_token_here';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array(
  'Authorization: Bearer ' . $token,
));
$response = curl_exec($curl);
if ($response === false) {
  $error = curl_error($curl);
  echo 'Error: ' . $error;
} else {
  echo 'API response: ' . $response;
}
curl_close($curl);`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="python">Python</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`import requests
import json
url = 'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY'
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>'
}
data = {
    'key1': 'value1',
    'key2': 'value2'
}
# For the list of arguments refer to the API Endpoint Section
response = requests.post(url, headers=headers, data=json.dumps(data))
if response.status_code == 200:
    response_data = response.json()
    print(response_data)
else:
    error_message = f"API call failed with status code {response.status_code}"
    print(error_message)`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="nodejs">Nodejs</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
        {`fetch(
  'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY', {
    method: "POST",
    body: JSON.stringify({
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      brandName: brandName,
      productName: productName,
      productId: productId,
      warrantyExpireDate: warrantyExpireDate,
      buyerMetamaskAddress: buyerMetamaskAddress,
      methodType: 0
  })
  headers: {
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + YOUR_API_SECRET
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="jquery">jQuery</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`$.ajax({
  url: 'https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY',
  type: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>'
  },
  data: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  }),
  // For the list of arguments refer to the API Endpoint Section
  success: function(response) {
    console.log(response);
  },
  error: function(xhr, status, error) {
    console.error(error);
  }
});`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="go">Go</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`package main
import (
  "bytes"
  "encoding/json"
  "fmt"
  "net/http"
)
func main() {
  url := "https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY"
  requestData := map[string]string{"key1": "value1", "key2": "value2"}
  // For the list of arguments refer to the API Endpoint Section
  jsonPayload, _ := json.Marshal(requestData)
  req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonPayload))
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Set("Content-Type", "application/json")
  req.Header.Set("Authorization", "Bearer <token>")
  client := &http.Client{}
  resp, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer resp.Body.Close()
  if resp.StatusCode == http.StatusOK {
    var response map[string]interface{}
    err = json.NewDecoder(resp.Body).Decode(&response)
    if err != nil {
      fmt.Println(err)
      return
    }
    fmt.Println(response)
  } else {
    fmt.Printf("API call failed with status code %d", resp.StatusCode)
  }
}`}
        </code>
      </pre>
      <span className={styles.space} />

      <h3 className={styles.subHeading} id="ruby">Ruby</h3>
      <hr className={styles.hr} />
      <pre>
        <code className="language-javascript">
{`require 'net/http'
require 'json'
uri = URI.parse('https://api-drunkenbytes.onrender.com/v1/nft/mint-nft?api_key=YOUR_API_KEY')
data = { 'key1' => 'value1', 'key2' => 'value2' }
# For the list of arguments refer to the API Endpoint Section
payload = JSON.generate(data)
request = Net::HTTP::Post.new(uri)
request.content_type = 'application/json'
request['Authorization'] = 'Bearer <token>'
request.body = payload
response = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(request)
end
if response.code == '200'
  result = JSON.parse(response.body)
  puts result
else
  puts "Error: #{response.code} - #{response.message}"
end`}
        </code>
      </pre>
      <span className={styles.space} />
    </div>
  );
};

export default DocumentationText;
