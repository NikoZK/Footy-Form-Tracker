import { registerRootComponent } from 'expo'

import App from './App'
import { AuthProvider } from './context/AuthContext.js'

function Root() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
