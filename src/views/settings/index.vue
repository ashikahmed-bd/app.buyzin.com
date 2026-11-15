<script setup>
import { ref } from 'vue'
import {
    Store,
    Globe,
    ShoppingBag,
    CreditCard,
    Truck,
    Bell,
    ShieldCheck,
    Search,
    Save,
    Upload,
    Image,
    Mail,
    Phone,
    MapPin,
    Lock,
    Eye,
    EyeOff,
    ChevronRight,
    Settings,
    FileText,
    Share2,
    RotateCcw,
} from '@lucide/vue'

const activeTab = ref('General')

const tabs = [
    { label: 'General', icon: Settings },
    { label: 'Marketplace', icon: Store },
    { label: 'Orders', icon: ShoppingBag },
    { label: 'Payments', icon: CreditCard },
    { label: 'Shipping', icon: Truck },
    { label: 'Notifications', icon: Bell },
    { label: 'Security', icon: ShieldCheck },
    { label: 'SEO', icon: Globe },
]

const settings = ref({
    siteName: 'Buyzin',
    siteEmail: 'support@buyzin.com',
    phone: '+880 1700-000000',
    address: 'Dhaka, Bangladesh',
    currency: 'BDT',
    timezone: 'Asia/Dhaka',
    language: 'English',
    siteDescription: 'Buyzin is a B2B marketplace connecting businesses and suppliers.',
    maintenance: false,
    sellerRegistration: true,
    customerRegistration: true,
    sellerApproval: true,
    productApproval: true,
    guestCheckout: false,
    orderConfirmation: true,
    autoCancel: true,
    autoCancelHours: '48',
    cod: true,
    onlinePayment: true,
    bankTransfer: true,
    emailNotifications: true,
    orderNotifications: true,
    sellerNotifications: true,
    twoFactor: false,
    loginAlerts: true,
    metaTitle: 'Buyzin - B2B Marketplace',
    metaDescription: 'Discover wholesale products and connect with trusted suppliers.',
})

const saved = ref(false)

const saveSettings = () => {
    saved.value = true
    setTimeout(() => {
        saved.value = false
    }, 2500)
}
</script>

<template>
    <div class="space-y-4">

        <div class="flex items-center justify-between gap-4">
            <div>
                <h1 class="text-xl font-semibold text-title">Settings</h1>
                <p class="mt-1 text-sm text-muted">
                    Manage your marketplace configuration and preferences.
                </p>
            </div>

            <button @click="saveSettings"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:opacity-90">
                <Save class="size-4" />
                {{ saved ? 'Saved Successfully' : 'Save Changes' }}
            </button>
        </div>

        <div class="grid grid-cols-1 items-start gap-5 lg:grid-cols-[230px_minmax(0,1fr)]">
            <!-- Sidebar Navigation -->
            <aside class="rounded-xl bg-white p-2">
                <p class="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    Configuration
                </p>

                <nav class="flex gap-1 overflow-x-auto lg:flex-col">
                    <button v-for="tab in tabs" :key="tab.label" @click="activeTab = tab.label"
                        class="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition lg:w-full"
                        :class="activeTab === tab.label
                            ? 'bg-primary/10 text-primary'
                            : 'text-body hover:bg-gray-50'">
                        <component :is="tab.icon" class="size-4 shrink-0" />
                        <span>{{ tab.label }}</span>
                        <ChevronRight v-if="activeTab === tab.label" class="ml-auto hidden size-4 lg:block" />
                    </button>
                </nav>

                <div class="border-t border-border p-3">
                    <div class="flex items-center gap-2">
                        <div class="flex size-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                            <ShieldCheck class="size-5" />
                        </div>
                        <div>
                            <p class="text-xs font-semibold text-title">System Status</p>
                            <p class="mt-0.5 text-xs text-emerald-600">All systems operational</p>
                        </div>
                    </div>
                </div>
            </aside>

            <!-- Settings Content -->
            <div class="min-w-0 space-y-5">
                <!-- General -->
                <template v-if="activeTab === 'General'">
                    <div class="rounded-xl bg-white">
                        <div class="border-b border-border p-5">
                            <h2 class="font-semibold text-title">General Settings</h2>
                            <p class="mt-1 text-sm text-muted">Basic information about your marketplace.</p>
                        </div>

                        <div class="space-y-5 p-5">

                            <!-- Logo -->
                            <div>
                                <label class="mb-2 block text-sm font-medium text-title">Marketplace Logo</label>
                                <div class="flex flex-wrap items-center gap-4">
                                    <div
                                        class="flex size-20 items-center justify-center rounded-xl border border-border bg-gray-50">
                                        <Store class="size-8 text-primary" />
                                    </div>
                                    <div>
                                        <button
                                            class="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-body hover:bg-gray-50">
                                            <Upload class="size-4" />
                                            Upload Logo
                                        </button>
                                        <p class="mt-2 text-xs text-muted">PNG, JPG or SVG. Recommended size 300 ×
                                            100px.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label class="mb-2 block text-sm font-medium text-title">Marketplace Name</label>
                                    <input v-model="settings.siteName"
                                        class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label class="mb-2 block text-sm font-medium text-title">Support Email</label>
                                    <input v-model="settings.siteEmail" type="email"
                                        class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label class="mb-2 block text-sm font-medium text-title">Phone Number</label>
                                    <input v-model="settings.phone"
                                        class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label class="mb-2 block text-sm font-medium text-title">Address</label>
                                    <input v-model="settings.address"
                                        class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label class="mb-2 block text-sm font-medium text-title">Default Currency</label>
                                    <select v-model="settings.currency"
                                        class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary">
                                        <option value="BDT">BDT - Bangladeshi Taka</option>
                                        <option value="USD">USD - US Dollar</option>
                                        <option value="EUR">EUR - Euro</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="mb-2 block text-sm font-medium text-title">Timezone</label>
                                    <select v-model="settings.timezone"
                                        class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary">
                                        <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
                                        <option value="Asia/Kolkata">Asia/Kolkata (GMT+5:30)</option>
                                        <option value="UTC">UTC</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="mb-2 block text-sm font-medium text-title">Marketplace Description</label>
                                <textarea v-model="settings.siteDescription" rows="3"
                                    class="w-full resize-none rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="rounded-xl border border-border bg-surface p-5">
                        <h2 class="font-semibold text-title">Maintenance Mode</h2>
                        <p class="mt-1 text-sm text-muted">Temporarily disable public access to your marketplace.</p>
                        <div class="mt-4 flex items-center justify-between border-t border-border pt-4">
                            <div>
                                <p class="text-sm font-medium text-title">Enable Maintenance Mode</p>
                                <p class="mt-1 text-xs text-muted">Only administrators can access the marketplace.</p>
                            </div>
                            <input v-model="settings.maintenance" type="checkbox" class="size-4 accent-primary" />
                        </div>
                    </div>
                </template>

                <!-- Marketplace -->
                <template v-else-if="activeTab === 'Marketplace'">
                    <div class="rounded-xl bg-white">
                        <div class="border-b border-border p-5">
                            <h2 class="font-semibold text-title">Marketplace Settings</h2>
                            <p class="mt-1 text-sm text-muted">Control seller and customer registration.</p>
                        </div>

                        <div class="divide-y divide-border px-5">
                            <div v-for="item in [
                                { key: 'sellerRegistration', title: 'Seller Registration', desc: 'Allow new businesses to register as sellers.' },
                                { key: 'customerRegistration', title: 'Customer Registration', desc: 'Allow customers to create marketplace accounts.' },
                                { key: 'sellerApproval', title: 'Seller Approval', desc: 'Require admin approval before a seller becomes active.' },
                                { key: 'productApproval', title: 'Product Approval', desc: 'Review seller products before publishing.' },
                            ]" :key="item.key" class="flex items-center justify-between gap-4 py-4">
                                <div>
                                    <p class="text-sm font-medium text-title">{{ item.title }}</p>
                                    <p class="mt-1 text-xs text-muted">{{ item.desc }}</p>
                                </div>
                                <input v-model="settings[item.key]" type="checkbox"
                                    class="size-4 shrink-0 accent-primary" />
                            </div>
                        </div>
                    </div>
                </template>

                <!-- Orders -->
                <template v-else-if="activeTab === 'Orders'">
                    <div class="rounded-xl bg-white">
                        <div class="border-b border-border p-5">
                            <h2 class="font-semibold text-title">Order Settings</h2>
                            <p class="mt-1 text-sm text-muted">Configure order processing and checkout.</p>
                        </div>

                        <div class="divide-y divide-border px-5">
                            <div class="flex items-center justify-between gap-4 py-4">
                                <div>
                                    <p class="text-sm font-medium text-title">Guest Checkout</p>
                                    <p class="mt-1 text-xs text-muted">Allow customers to place orders without an
                                        account.</p>
                                </div>
                                <input v-model="settings.guestCheckout" type="checkbox" class="size-4 accent-primary" />
                            </div>

                            <div class="flex items-center justify-between gap-4 py-4">
                                <div>
                                    <p class="text-sm font-medium text-title">Order Confirmation</p>
                                    <p class="mt-1 text-xs text-muted">Automatically confirm eligible orders.</p>
                                </div>
                                <input v-model="settings.orderConfirmation" type="checkbox"
                                    class="size-4 accent-primary" />
                            </div>

                            <div class="flex items-center justify-between gap-4 py-4">
                                <div>
                                    <p class="text-sm font-medium text-title">Auto Cancel Pending Orders</p>
                                    <p class="mt-1 text-xs text-muted">Automatically cancel unpaid pending orders.</p>
                                </div>
                                <input v-model="settings.autoCancel" type="checkbox" class="size-4 accent-primary" />
                            </div>

                            <div class="py-4">
                                <label class="mb-2 block text-sm font-medium text-title">Auto Cancel After</label>
                                <div class="flex max-w-xs items-center gap-3">
                                    <input v-model="settings.autoCancelHours" type="number" min="1"
                                        class="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
                                    <span class="text-sm text-muted">Hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

                <!-- Payments -->
                <template v-else-if="activeTab === 'Payments'">
                    <div class="rounded-xl bg-white">
                        <div class="border-b border-border p-5">
                            <h2 class="font-semibold text-title">Payment Methods</h2>
                            <p class="mt-1 text-sm text-muted">Enable or disable payment methods for customers.</p>
                        </div>

                        <div class="divide-y divide-border px-5">
                            <div v-for="item in [
                                { key: 'cod', title: 'Cash on Delivery', desc: 'Accept payments when orders are delivered.', icon: Wallet },
                                { key: 'onlinePayment', title: 'Online Payment', desc: 'Accept payments through online gateways.', icon: CreditCard },
                                { key: 'bankTransfer', title: 'Bank Transfer', desc: 'Allow customers to pay through bank transfers.', icon: Store },
                            ]" :key="item.key" class="flex items-center justify-between gap-4 py-5">
                                <div class="flex items-center gap-3">
                                    <div class="rounded-lg bg-gray-100 p-2.5 text-body">
                                        <component :is="item.icon" class="size-5" />
                                    </div>
                                    <div>
                                        <p class="text-sm font-medium text-title">{{ item.title }}</p>
                                        <p class="mt-1 text-xs text-muted">{{ item.desc }}</p>
                                    </div>
                                </div>
                                <input v-model="settings[item.key]" type="checkbox"
                                    class="size-4 shrink-0 accent-primary" />
                            </div>
                        </div>
                    </div>

                    <div class="rounded-xl border border-border bg-surface p-5">
                        <h2 class="font-semibold text-title">Payment Gateway Configuration</h2>
                        <p class="mt-1 text-sm text-muted">Connect your payment gateway credentials securely.</p>
                        <div class="mt-4 flex items-center justify-between rounded-lg border border-border p-4">
                            <div>
                                <p class="text-sm font-medium text-title">Payment Gateway</p>
                                <p class="mt-1 text-xs text-muted">Configure API keys and webhook settings.</p>
                            </div>
                            <button
                                class="rounded-lg border border-border px-3 py-2 text-sm font-medium text-body hover:bg-gray-50">Configure</button>
                        </div>
                    </div>
                </template>

                <!-- Shipping -->
                <template v-else-if="activeTab === 'Shipping'">
                    <div class="rounded-xl bg-white">
                        <div class="border-b border-border p-5">
                            <h2 class="font-semibold text-title">Shipping Settings</h2>
                            <p class="mt-1 text-sm text-muted">Configure delivery and shipping options.</p>
                        </div>

                        <div class="space-y-4 p-5">
                            <div>
                                <label class="mb-2 block text-sm font-medium text-title">Default Shipping
                                    Provider</label>
                                <select
                                    class="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary">
                                    <option>Select shipping provider</option>
                                    <option>Pathao Courier</option>
                                    <option>Steadfast</option>
                                    <option>RedX</option>
                                    <option>Paperfly</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="mb-2 block text-sm font-medium text-title">Default Shipping Fee
                                        (৳)</label>
                                    <input type="number" value="60"
                                        class="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
                                </div>
                                <div>
                                    <label class="mb-2 block text-sm font-medium text-title">Free Shipping Minimum
                                        (৳)</label>
                                    <input type="number" value="3000"
                                        class="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
                                </div>
                            </div>

                            <div class="flex items-center justify-between border-t border-border pt-4">
                                <div>
                                    <p class="text-sm font-medium text-title">Enable Free Shipping</p>
                                    <p class="mt-1 text-xs text-muted">Offer free delivery above the minimum order
                                        amount.</p>
                                </div>
                                <input type="checkbox" checked class="size-4 accent-primary" />
                            </div>
                        </div>
                    </div>
                </template>

                <!-- Notifications -->
                <template v-else-if="activeTab === 'Notifications'">
                    <div class="rounded-xl bg-white">
                        <div class="border-b border-border p-5">
                            <h2 class="font-semibold text-title">Notification Settings</h2>
                            <p class="mt-1 text-sm text-muted">Manage marketplace email and system notifications.</p>
                        </div>

                        <div class="divide-y divide-border px-5">
                            <div v-for="item in [
                                { key: 'emailNotifications', title: 'Email Notifications', desc: 'Send important updates through email.' },
                                { key: 'orderNotifications', title: 'Order Notifications', desc: 'Receive notifications for new orders and order updates.' },
                                { key: 'sellerNotifications', title: 'Seller Notifications', desc: 'Receive alerts about seller registration and activity.' },
                            ]" :key="item.key" class="flex items-center justify-between gap-4 py-4">
                                <div>
                                    <p class="text-sm font-medium text-title">{{ item.title }}</p>
                                    <p class="mt-1 text-xs text-muted">{{ item.desc }}</p>
                                </div>
                                <input v-model="settings[item.key]" type="checkbox"
                                    class="size-4 shrink-0 accent-primary" />
                            </div>
                        </div>
                    </div>

                    <div class="rounded-xl border border-border bg-surface p-5">
                        <h2 class="font-semibold text-title">Email Configuration</h2>
                        <p class="mt-1 text-sm text-muted">Configure SMTP settings in your application environment.</p>
                        <div class="mt-4 flex items-center justify-between rounded-lg border border-border p-4">
                            <div class="flex items-center gap-3">
                                <Mail class="size-5 text-muted" />
                                <div>
                                    <p class="text-sm font-medium text-title">SMTP Configuration</p>
                                    <p class="mt-1 text-xs text-muted">Manage outgoing email credentials.</p>
                                </div>
                            </div>
                            <span
                                class="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">Configured</span>
                        </div>
                    </div>
                </template>

                <!-- Security -->
                <template v-else-if="activeTab === 'Security'">
                    <div class="rounded-xl bg-white">
                        <div class="border-b border-border p-5">
                            <h2 class="font-semibold text-title">Security Settings</h2>
                            <p class="mt-1 text-sm text-muted">Protect your admin account and marketplace.</p>
                        </div>

                        <div class="divide-y divide-border px-5">
                            <div class="flex items-center justify-between gap-4 py-4">
                                <div>
                                    <p class="text-sm font-medium text-title">Two-Factor Authentication</p>
                                    <p class="mt-1 text-xs text-muted">Require an additional verification step for admin
                                        login.</p>
                                </div>
                                <input v-model="settings.twoFactor" type="checkbox" class="size-4 accent-primary" />
                            </div>

                            <div class="flex items-center justify-between gap-4 py-4">
                                <div>
                                    <p class="text-sm font-medium text-title">Login Alerts</p>
                                    <p class="mt-1 text-xs text-muted">Notify administrators about new login activity.
                                    </p>
                                </div>
                                <input v-model="settings.loginAlerts" type="checkbox" class="size-4 accent-primary" />
                            </div>
                        </div>
                    </div>

                    <div class="rounded-xl border border-border bg-surface p-5">
                        <div class="flex items-center gap-3">
                            <div class="rounded-lg bg-amber-50 p-2.5 text-amber-600">
                                <Lock class="size-5" />
                            </div>
                            <div>
                                <h2 class="font-semibold text-title">Change Admin Password</h2>
                                <p class="mt-1 text-sm text-muted">Update your administrator account password.</p>
                            </div>
                        </div>

                        <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="mb-2 block text-sm font-medium text-title">Current Password</label>
                                <input type="password" placeholder="Enter current password"
                                    class="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
                            </div>
                            <div>
                                <label class="mb-2 block text-sm font-medium text-title">New Password</label>
                                <input type="password" placeholder="Enter new password"
                                    class="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
                            </div>
                        </div>
                    </div>
                </template>

                <!-- SEO -->
                <template v-else-if="activeTab === 'SEO'">
                    <div class="rounded-xl bg-white">
                        <div class="border-b border-border p-5">
                            <h2 class="font-semibold text-title">SEO Settings</h2>
                            <p class="mt-1 text-sm text-muted">Optimize your marketplace for search engines.</p>
                        </div>

                        <div class="space-y-5 p-5">
                            <div>
                                <label class="mb-2 block text-sm font-medium text-title">Meta Title</label>
                                <input v-model="settings.metaTitle"
                                    class="w-full rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-primary" />
                                <p class="mt-1 text-xs text-muted">Recommended: 50–60 characters.</p>
                            </div>

                            <div>
                                <label class="mb-2 block text-sm font-medium text-title">Meta Description</label>
                                <textarea v-model="settings.metaDescription" rows="4"
                                    class="w-full resize-none rounded-lg border border-border px-3 py-2.5 text-sm outline-none focus:border-primary"></textarea>
                                <p class="mt-1 text-xs text-muted">Recommended: 150–160 characters.</p>
                            </div>

                            <div>
                                <label class="mb-2 block text-sm font-medium text-title">Social Sharing Image</label>
                                <button
                                    class="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-border p-8 text-center hover:bg-gray-50">
                                    <Image class="size-8 text-muted" />
                                    <span class="mt-2 text-sm font-medium text-title">Upload social sharing image</span>
                                    <span class="mt-1 text-xs text-muted">Recommended size 1200 × 630px</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </template>

                <!-- Save Footer -->
                <div class="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                        class="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-body hover:bg-gray-50">
                        <RotateCcw class="size-4" />
                        Reset Changes
                    </button>

                    <button @click="saveSettings"
                        class="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
                        <Save class="size-4" />
                        {{ saved ? 'Saved Successfully' : 'Save Changes' }}
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>
