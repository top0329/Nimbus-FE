const data = {
    NavBar: {
        links: [
            "Dashboard",
            "Rent GPU",
            "Nodes",
            "Staking",
            "Profile",
            "Support",
        ],
    },
    SideBar: [
        {
            "img": "/dashboard.svg",
            "content": "Dashboard",
            "path": 'dashboard'
        },
        {
            "img": "/rent.svg",
            "content": "Rent GPU",
            "path": 'rent'
        },
        {
            "img": "/node.svg",
            "content": "Nodes",
            "path": 'node'
        },
        {
            "img": "/staking.svg",
            "content": "Staking",
            "path": 'staking'
        },
        {
            "img": "/profile.svg",
            "content": "Profile",
            "path": 'profile'
        },
        {
            "img": "/support.svg",
            "content": "Support",
            "path": 'support'
        },
        {
            "img": "/support.svg",
            "content": "Admin",
            "path": 'admin'
        },
    ],
    assets: [
        {
            "id": "A16",
            "img": "/Nvidia-A16.png",
            "name": "NVIDIA A16",
            "desc": "Enabling Virtual desktops and workstations with the power and performance to tackle any project from anywhere",

        },
        {
            "id": "A40",
            "img": "/Nvidia-A40.svg",
            "name": "NVIDIA A40",
            "desc": "Combing professional graphics with powerful compute and AI , to meet today’s design , creative , and scientific challenges",

        },
        {
            "id": "A100",
            "img": "/Nvidia-A100.png",
            "name": "NVIDIA A100",
            "desc": "Enabling researchers and scientists to combine simulation, data analytics , and AI to drive scientific progress",

        }
        // {
        //     "img": "/Nvidia-H100.svg",
        //     "name": "NVIDIA H100",
        //     "desc": "Delivering unprecedented acceleration to power the world’s most advanced AI , data analytics, and HPC workloads"
        // },
        // {
        //     "img": "/Nvidia-L40S.png",
        //     "name": "NVIDIA L40S",
        //     "desc": "Combining powerful AI compute with best-in-class graphics and media acceleration to power the next generation of data center workloads"
        // },
        // {
        //     "img": "/Nvidia-GH200.svg",
        //     "name": "NVIDIA GH200",
        //     "desc": "Delivering breakthrough acceleration of large-scale AI, model training and inference, and high-performance computing (HPC) applications"
        // }
    ],
    assetsDetail: {
        "A16": [
            {
                "id": "vcg-a16-2c-8g-2vram",
                "vcpu_count": 2,
                "ram": 8,
                "disk": 50,
                "disk_count": 1,
                "bandwidth": 1024,
                "monthly_cost": 43,
                "type": "vcg",
                "locations": [
                    "ewr",
                    "ord",
                    "lhr",
                    "fra",
                    "sjc",
                    "nrt",
                    "blr"
                ],
                "gpu_vram_gb": 2,
                "gpu_type": "NVIDIA_A16"
            },
            {
                "id": "vcg-a16-2c-16g-4vram",
                "vcpu_count": 2,
                "ram": 16,
                "disk": 80,
                "disk_count": 1,
                "bandwidth": 2048,
                "monthly_cost": 86,
                "type": "vcg",
                "locations": [
                    "ewr",
                    "ord",
                    "lhr",
                    "fra",
                    "sjc",
                    "nrt",
                    "blr"
                ],
                "gpu_vram_gb": 4,
                "gpu_type": "NVIDIA_A16"
            },
            {
                "id": "vcg-a16-3c-32g-8vram",
                "vcpu_count": 3,
                "ram": 32,
                "disk": 170,
                "disk_count": 1,
                "bandwidth": 3072,
                "monthly_cost": 172,
                "type": "vcg",
                "locations": [
                    "ewr",
                    "ord",
                    "lhr",
                    "fra",
                    "sjc",
                    "nrt",
                    "blr"
                ],
                "gpu_vram_gb": 8,
                "gpu_type": "NVIDIA_A16"
            },
            {
                "id": "vcg-a16-6c-64g-16vram",
                "vcpu_count": 6,
                "ram": 64,
                "disk": 350,
                "disk_count": 1,
                "bandwidth": 6,
                "monthly_cost": 344,
                "type": "vcg",
                "locations": [
                    "ewr",
                    "ord",
                    "lhr",
                    "fra",
                    "sjc",
                    "nrt",
                    "blr"
                ],
                "gpu_vram_gb": 16,
                "gpu_type": "NVIDIA_A16"
            },
            {
                "id": "vcg-a16-12c-128g-32vram",
                "vcpu_count": 12,
                "ram": 128,
                "disk": 700,
                "disk_count": 1,
                "bandwidth": 10,
                "monthly_cost": 688,
                "type": "vcg",
                "locations": [
                    "ewr",
                    "ord",
                    "lhr",
                    "fra",
                    "sjc",
                    "nrt",
                    "blr"
                ],
                "gpu_vram_gb": 32,
                "gpu_type": "NVIDIA_A16"
            },
            {
                "id": "vcg-a16-24c-256g-64vram",
                "vcpu_count": 24,
                "ram": 256,
                "disk": 1200,
                "disk_count": 1,
                "bandwidth": 12,
                "monthly_cost": 1375,
                "type": "vcg",
                "locations": [
                    "ewr",
                    "ord",
                    "lhr",
                    "fra",
                    "sjc",
                    "nrt",
                    "blr"
                ],
                "gpu_vram_gb": 64,
                "gpu_type": "NVIDIA_A16"
            },
            {
                "id": "vcg-a16-48c-496g-128vram",
                "vcpu_count": 48,
                "ram": 512,
                "disk": 1500,
                "disk_count": 1,
                "bandwidth": 16,
                "monthly_cost": 2750,
                "type": "vcg",
                "locations": [
                    "ord",
                    "lhr",
                    "fra",
                    "sjc",
                    "nrt",
                    "blr"
                ],
                "gpu_vram_gb": 128,
                "gpu_type": "NVIDIA_A16"
            },
            {
                "id": "vcg-a16-96c-960g-256vram",
                "vcpu_count": 96,
                "ram": 1024,
                "disk": 1700,
                "disk_count": 1,
                "bandwidth": 25600,
                "monthly_cost": 5500,
                "type": "vcg",
                "locations": [
                    "lhr",
                    "blr"
                ],
                "gpu_vram_gb": 256,
                "gpu_type": "NVIDIA_A16"
            }
        ],
        "A40": [
            {
                "id": "vcg-a40-2c-10g-4vram",
                "vcpu_count": 2,
                "ram": 10,
                "disk": 180,
                "disk_count": 1,
                "bandwidth": 4096,
                "monthly_cost": 105,
                "type": "vcg",
                "locations": [
                    "ewr"
                ],
                "gpu_vram_gb": 4,
                "gpu_type": "NVIDIA_A40"
            },
            {
                "id": "vcg-a40-6c-30g-12vram",
                "vcpu_count": 6,
                "ram": 30,
                "disk": 550,
                "disk_count": 1,
                "bandwidth": 6,
                "monthly_cost": 315,
                "type": "vcg",
                "locations": [
                    "ewr"
                ],
                "gpu_vram_gb": 12,
                "gpu_type": "NVIDIA_A40"
            },
            {
                "id": "vcg-a40-8c-40g-16vram",
                "vcpu_count": 8,
                "ram": 40,
                "disk": 740,
                "disk_count": 1,
                "bandwidth": 8,
                "monthly_cost": 420,
                "type": "vcg",
                "locations": [
                    "ewr",
                    "nrt"
                ],
                "gpu_vram_gb": 16,
                "gpu_type": "NVIDIA_A40"
            },
            {
                "id": "vcg-a40-12c-60g-24vram",
                "vcpu_count": 12,
                "ram": 60,
                "disk": 1110,
                "disk_count": 1,
                "bandwidth": 10,
                "monthly_cost": 625,
                "type": "vcg",
                "locations": [
                    "lhr"
                ],
                "gpu_vram_gb": 24,
                "gpu_type": "NVIDIA_A40"
            },
            {
                "id": "vcg-a40-24c-120g-48vram",
                "vcpu_count": 24,
                "ram": 120,
                "disk": 1400,
                "disk_count": 1,
                "bandwidth": 16,
                "monthly_cost": 1250,
                "type": "vcg",
                "locations": [
                    "blr"
                ],
                "gpu_vram_gb": 48,
                "gpu_type": "NVIDIA_A40"
            }
        ],
        "A100": [{
            "id": "vcg-a100-1c-6g-4vram",
            "vcpu_count": 1,
            "ram": 6,
            "disk": 70,
            "disk_count": 1,
            "bandwidth": 1024,
            "monthly_cost": 90,
            "type": "vcg",
            "locations": [
                "ewr",
                "fra"
            ],
            "gpu_vram_gb": 4,
            "gpu_type": "NVIDIA_A100"
        },
        {
            "id": "vcg-a100-1c-12g-8vram",
            "vcpu_count": 1,
            "ram": 12,
            "disk": 140,
            "disk_count": 1,
            "bandwidth": 1024,
            "monthly_cost": 180,
            "type": "vcg",
            "locations": [
                "lhr",
                "fra"
            ],
            "gpu_vram_gb": 8,
            "gpu_type": "NVIDIA_A100"
        },
        {
            "id": "vcg-a100-2c-15g-10vram",
            "vcpu_count": 2,
            "ram": 16,
            "disk": 170,
            "disk_count": 1,
            "bandwidth": 2048,
            "monthly_cost": 250,
            "type": "vcg",
            "locations": [
                "fra"
            ],
            "gpu_vram_gb": 10,
            "gpu_type": "NVIDIA_A100"
        },
        {
            "id": "vcg-a100-3c-30g-20vram",
            "vcpu_count": 3,
            "ram": 30,
            "disk": 350,
            "disk_count": 1,
            "bandwidth": 3072,
            "monthly_cost": 450,
            "type": "vcg",
            "locations": [
                "ewr",
                "lhr",
                "fra"
            ],
            "gpu_vram_gb": 20,
            "gpu_type": "NVIDIA_A100"
        },
        {
            "id": "vcg-a100-6c-60g-40vram",
            "vcpu_count": 6,
            "ram": 60,
            "disk": 700,
            "disk_count": 1,
            "bandwidth": 6,
            "monthly_cost": 875,
            "type": "vcg",
            "locations": [
                "fra",
                "sjc",
                "blr"
            ],
            "gpu_vram_gb": 40,
            "gpu_type": "NVIDIA_A100"
        },
        {
            "id": "vcg-a100-12c-120g-80vram",
            "vcpu_count": 12,
            "ram": 120,
            "disk": 1400,
            "disk_count": 1,
            "bandwidth": 10,
            "monthly_cost": 1750,
            "type": "vcg",
            "locations": [
                "lhr",
                "fra",
                "nrt",
                "blr"
            ],
            "gpu_vram_gb": 80,
            "gpu_type": "NVIDIA_A100"
        },
        {
            "id": "vcg-a100-24c-240g-160vram",
            "vcpu_count": 24,
            "ram": 250,
            "disk": 1400,
            "disk_count": 1,
            "bandwidth": 10,
            "monthly_cost": 3500,
            "type": "vcg",
            "locations": [
                "fra",
                "nrt",
                "blr"
            ],
            "gpu_vram_gb": 160,
            "gpu_type": "NVIDIA_A100"
        },
        {
            "id": "vcg-a100-48c-480g-320vram",
            "vcpu_count": 48,
            "ram": 500,
            "disk": 1400,
            "disk_count": 1,
            "bandwidth": 16,
            "monthly_cost": 7000,
            "type": "vcg",
            "locations": [
                "fra",
                "nrt"
            ],
            "gpu_vram_gb": 320,
            "gpu_type": "NVIDIA_A100"
        }]
    },

    NodesButtons: [
        {
            "img": "./ethereum.svg",
            "tokenName": "Ethereum"
        },
        {
            "img": "./arbitrum.svg",
            "tokenName": "Arbitrum"
        },
        {
            "img": "./solana.svg",
            "tokenName": "Solana"
        },
        {
            "img": "./avalanche.svg",
            "tokenName": "Avalanche"
        },

    ],


}
const os = {
    "iso": [

        {
            "id": 159,
            "name": "Custom",
            "arch": "x64",
            "family": "iso"
        },
    ],
    "snapshot": [
        {
            "id": 164,
            "name": "Snapshot",
            "arch": "x64",
            "family": "snapshot"
        },
    ],
    "backup": [
        {
            "id": 180,
            "name": "Backup",
            "arch": "x64",
            "family": "backup"
        },
    ],
    "freebsd": [
        {
            "id": 447,
            "name": "FreeBSD 13 x64",
            "arch": "x64",
            "family": "freebsd"
        },
        {
            "id": 2212,
            "name": "FreeBSD 14 x64",
            "arch": "x64",
            "family": "freebsd"
        },
    ],
    "application": [
        {
            "id": 186,
            "name": "Application",
            "arch": "x64",
            "family": "application"
        },
    ],
    "centos": [
        {
            "id": 167,
            "name": "CentOS 7 x64",
            "arch": "x64",
            "family": "centos"
        },
        {
            "id": 381,
            "name": "CentOS 7 SELinux x64",
            "arch": "x64",
            "family": "centos"
        },

        {
            "id": 401,
            "name": "CentOS 8 Stream x64",
            "arch": "x64",
            "family": "centos"
        },
        {
            "id": 542,
            "name": "CentOS 9 Stream x64",
            "arch": "x64",
            "family": "centos"
        },
    ],
    "archlinux": [
        {
            "id": 535,
            "name": "Arch Linux x64",
            "arch": "x64",
            "family": "archlinux"
        },
    ],
    "windows": [
        {
            "id": 240,
            "name": "Windows 2016 Standard x64",
            "arch": "x64",
            "family": "windows"
        },

        {
            "id": 371,
            "name": "Windows 2019 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 501,
            "name": "Windows 2022 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 521,
            "name": "Windows Core 2022 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 522,
            "name": "Windows Core 2016 Standard x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 523,
            "name": "Windows Core 2019 Standard x64",
            "arch": "x64",
            "family": "windows"
        },

        {
            "id": 1761,
            "name": "Windows Core 2019 Datacenter x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 1762,
            "name": "Windows Core 2022 Datacenter x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 1764,
            "name": "Windows 2019 Datacenter x64",
            "arch": "x64",
            "family": "windows"
        },
        {
            "id": 1765,
            "name": "Windows 2022 Datacenter x64",
            "arch": "x64",
            "family": "windows"
        },

    ],
    "almalinux": [
        {
            "id": 452,
            "name": "AlmaLinux x64",
            "arch": "x64",
            "family": "almalinux"
        },
        {
            "id": 1868,
            "name": "AlmaLinux 9 x64",
            "arch": "x64",
            "family": "almalinux"
        },

    ],
    "rockylinux": [
        {
            "id": 448,
            "name": "Rocky Linux x64",
            "arch": "x64",
            "family": "rockylinux"
        },

        {
            "id": 1869,
            "name": "Rocky Linux 9 x64",
            "arch": "x64",
            "family": "rockylinux"
        },
    ],
    "flatcar": [
        {
            "id": 2075,
            "name": "Flatcar Container Linux LTS x64",
            "arch": "x64",
            "family": "flatcar"
        },
        {
            "id": 2077,
            "name": "Flatcar Container Linux Stable x64",
            "arch": "x64",
            "family": "flatcar"
        },
        {
            "id": 2078,
            "name": "Flatcar Container Linux Beta x64",
            "arch": "x64",
            "family": "flatcar"
        },
        {
            "id": 2079,
            "name": "Flatcar Container Linux Alpha x64",
            "arch": "x64",
            "family": "flatcar"
        },
    ],
    "alpinelinux": [
        {
            "id": 2076,
            "name": "Alpine Linux x64",
            "arch": "x64",
            "family": "alpinelinux"
        },

    ],
    "debian": [


        {
            "id": 352,
            "name": "Debian 10 x64 (buster)",
            "arch": "x64",
            "family": "debian"
        },
        {
            "id": 477,
            "name": "Debian 11 x64 (bullseye)",
            "arch": "x64",
            "family": "debian"
        },
        {
            "id": 2136,
            "name": "Debian 12 x64 (bookworm)",
            "arch": "x64",
            "family": "debian"
        },
    ],
    "opensuse": [

        {
            "id": 2157,
            "name": "openSUSE Leap 15 x64",
            "arch": "x64",
            "family": "opensuse"
        },
    ],
    "fedora": [
        {
            "id": 391,
            "name": "Fedora CoreOS Stable",
            "arch": "x64",
            "family": "fedora-coreos"
        },
        {
            "id": 424,
            "name": "Fedora CoreOS Next",
            "arch": "x64",
            "family": "fedora-coreos"
        },
        {
            "id": 425,
            "name": "Fedora CoreOS Testing",
            "arch": "x64",
            "family": "fedora-coreos"
        },
        {
            "id": 2107,
            "name": "Fedora 38 x64",
            "arch": "x64",
            "family": "fedora"
        },

        {
            "id": 2180,
            "name": "Fedora 39 x64",
            "arch": "x64",
            "family": "fedora"
        },
        {
            "id": 2283,
            "name": "Fedora 40 x64",
            "arch": "x64",
            "family": "fedora"
        },

    ],
    "ubuntu": [
        {
            "id": 2256,
            "name": "Vultr GPU Cluster Stack Ubuntu 20.04",
            "arch": "x64",
            "family": "vultr_gpu_cluster_stack"
        },
        {
            "id": 1743,
            "name": "Ubuntu 22.04 LTS x64",
            "arch": "x64",
            "family": "ubuntu"
        },
        {
            "id": 387,
            "name": "Ubuntu 20.04 LTS x64",
            "arch": "x64",
            "family": "ubuntu"
        },
        {
            "id": 2179,
            "name": "Ubuntu 23.10 x64",
            "arch": "x64",
            "family": "ubuntu"
        },
        {
            "id": 2284,
            "name": "Ubuntu 24.04 LTS x64",
            "arch": "x64",
            "family": "ubuntu"
        },

    ],
    "openbsd": [

        {
            "id": 2187,
            "name": "OpenBSD 7.4 x64",
            "arch": "x64",
            "family": "openbsd"
        },
        {
            "id": 2286,
            "name": "OpenBSD 7.5 x64",
            "arch": "x64",
            "family": "openbsd"
        }
    ]
};

const vcgOs = [
    "Alma Linux",
    "Arch Linux",
    "CentOS",
    "Debian",
    "Fedora",
    "Rocky Linux",
    "Ubuntu"
];

const locationData = [
    { code: "us", name: "Chicago", id: "ord" },
    { code: "us", name: "New Jersey", id: "ewr" },
    { code: "us", name: "Silicon Valley", id: "sjc" },
    { code: "gb", name: "London", id: "lhr" },
    { code: "de", name: "Frankfurt", id: "fra" },
    { code: "jp", name: "Tokyo", id: "nrt" },
    { code: "in", name: "Bangalore", id: "blr" }
];
export { data, locationData, os, vcgOs }
